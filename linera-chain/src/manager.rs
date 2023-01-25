// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use crate::{
    data_types::{Block, BlockAndRound, BlockProposal, Certificate, Value, Vote},
    ChainError,
};
use linera_base::{
    crypto::{HashValue, KeyPair},
    data_types::{BlockHeight, Owner, RoundNumber},
    ensure,
};
use linera_execution::{ApplicationId, ChainOwnership, Destination, Effect};
use log::error;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

/// How to produce new blocks.
#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum ChainManager {
    /// The chain is not active. (No blocks can be created)
    None,
    /// The chain is managed by a single owner.
    Single(Box<SingleOwnerManager>),
    /// The chain is managed by multiple owners.
    Multi(Box<MultiOwnerManager>),
}

/// The specific state of a chain managed by one owner.
#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct SingleOwnerManager {
    /// The owner of the chain.
    pub owner: Owner,
    /// Latest proposal that we have voted on last (both to validate and confirm it).
    pub pending: Option<(Vote, Value)>,
}

/// The specific state of a chain managed by multiple owners.
#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct MultiOwnerManager {
    /// The co-owners of the chain.
    /// Using a map instead a hashset because Serde treats HashSet's as vectors.
    pub owners: HashMap<Owner, ()>,
    /// Latest authenticated block that we have received.
    pub proposed: Option<BlockProposal>,
    /// Latest validated proposal that we have seen (and voted to confirm).
    pub locked: Option<Certificate>,
    /// Latest proposal that we have voted on (either to validate or to confirm it).
    pub pending: Option<(Vote, Value)>,
}

/// The result of verifying a (valid) query.
#[derive(Eq, PartialEq)]
pub enum Outcome {
    Accept,
    Skip,
}

impl Default for ChainManager {
    fn default() -> Self {
        ChainManager::None
    }
}

impl SingleOwnerManager {
    pub fn new(owner: Owner) -> Self {
        SingleOwnerManager {
            owner,
            pending: None,
        }
    }
}

impl MultiOwnerManager {
    pub fn new(owners: HashMap<Owner, ()>) -> Self {
        MultiOwnerManager {
            owners,
            proposed: None,
            locked: None,
            pending: None,
        }
    }

    pub fn round(&self) -> RoundNumber {
        let mut current_round = RoundNumber::default();
        if let Some(proposal) = &self.proposed {
            if current_round < proposal.content.round {
                current_round = proposal.content.round;
            }
        }
        if let Some(cert) = &self.locked {
            if let Value::ValidatedBlock { round, .. } = &cert.value {
                if current_round < *round {
                    current_round = *round;
                }
            }
        }
        current_round
    }
}

impl ChainManager {
    pub fn reset(&mut self, ownership: &ChainOwnership) {
        match ownership {
            ChainOwnership::None => {
                *self = ChainManager::None;
            }
            ChainOwnership::Single { owner } => {
                *self = ChainManager::Single(Box::new(SingleOwnerManager::new(*owner)));
            }
            ChainOwnership::Multi { owners } => {
                *self = ChainManager::Multi(Box::new(MultiOwnerManager::new(owners.clone())));
            }
        }
    }

    pub fn is_active(&self) -> bool {
        !matches!(self, ChainManager::None)
    }

    pub fn has_owner(&self, owner: &Owner) -> bool {
        match self {
            ChainManager::Single(manager) => manager.owner == *owner,
            ChainManager::Multi(manager) => manager.owners.contains_key(owner),
            ChainManager::None => false,
        }
    }

    pub fn next_round(&self) -> RoundNumber {
        match self {
            ChainManager::Multi(m) => {
                let round = m.round();
                round.try_add_one().unwrap_or(round)
            }
            _ => RoundNumber::default(),
        }
    }

    pub fn pending(&self) -> Option<&(Vote, Value)> {
        match self {
            ChainManager::Single(manager) => manager.pending.as_ref(),
            ChainManager::Multi(manager) => manager.pending.as_ref(),
            _ => None,
        }
    }

    /// Verify the safety of the block w.r.t. voting rules.
    pub fn check_proposed_block(
        &self,
        block_hash: Option<HashValue>,
        next_block_height: BlockHeight,
        new_block: &Block,
        new_round: RoundNumber,
    ) -> Result<Outcome, ChainError> {
        ensure!(
            new_block.height == next_block_height,
            ChainError::UnexpectedBlockHeight {
                expected_block_height: next_block_height,
                found_block_height: new_block.height
            }
        );
        ensure!(
            new_block.previous_block_hash == block_hash,
            ChainError::UnexpectedPreviousBlockHash
        );
        ensure!(
            new_block.height <= BlockHeight::max(),
            ChainError::InvalidBlockHeight
        );
        match self {
            ChainManager::Single(manager) => {
                ensure!(
                    new_round == RoundNumber::default(),
                    ChainError::InvalidBlockProposal
                );
                if let Some((_, value)) = &manager.pending {
                    match value {
                        Value::ConfirmedBlock { block, .. } if block != new_block => {
                            log::error!("Attempting to sign a different block at the same height:\n{:?}\n{:?}", block, new_block);
                            return Err(ChainError::PreviousBlockMustBeConfirmedFirst);
                        }
                        Value::ValidatedBlock { .. } => {
                            return Err(ChainError::InvalidBlockProposal);
                        }
                        _ => {
                            return Ok(Outcome::Skip);
                        }
                    }
                }
                Ok(Outcome::Accept)
            }
            ChainManager::Multi(manager) => {
                if let Some(proposal) = &manager.proposed {
                    if proposal.content.block == *new_block && proposal.content.round == new_round {
                        return Ok(Outcome::Skip);
                    }
                    if new_round <= proposal.content.round {
                        return Err(ChainError::InsufficientRound(proposal.content.round));
                    }
                }
                if let Some(cert) = &manager.locked {
                    match &cert.value {
                        Value::ValidatedBlock { round, .. } if new_round <= *round => {
                            return Err(ChainError::InsufficientRound(*round));
                        }
                        Value::ValidatedBlock { block, round, .. } if new_block != block => {
                            return Err(ChainError::HasLockedBlock(block.height, *round));
                        }
                        _ => (),
                    }
                }
                Ok(Outcome::Accept)
            }
            _ => panic!("unexpected chain manager"),
        }
    }

    pub fn check_validated_block(
        &self,
        next_block_height: BlockHeight,
        new_block: &Block,
        new_round: RoundNumber,
    ) -> Result<Outcome, ChainError> {
        if next_block_height < new_block.height {
            return Err(ChainError::MissingEarlierBlocks {
                current_block_height: next_block_height,
            });
        }
        if next_block_height > new_block.height {
            // Block was already confirmed.
            return Ok(Outcome::Skip);
        }
        match self {
            ChainManager::Multi(manager) => {
                if let Some((_, value)) = &manager.pending {
                    match value {
                        Value::ConfirmedBlock { block, .. } if block == new_block => {
                            return Ok(Outcome::Skip);
                        }
                        Value::ValidatedBlock { round, .. } if new_round < *round => {
                            return Err(ChainError::InsufficientRound(
                                round.try_sub_one().unwrap(),
                            ));
                        }
                        _ => (),
                    }
                }
                if let Some(cert) = &manager.locked {
                    match &cert.value {
                        Value::ValidatedBlock { round, .. } if new_round < *round => {
                            return Err(ChainError::InsufficientRound(
                                round.try_sub_one().unwrap(),
                            ));
                        }
                        _ => (),
                    }
                }
                Ok(Outcome::Accept)
            }
            _ => panic!("unexpected chain manager"),
        }
    }

    pub fn create_vote(
        &mut self,
        proposal: BlockProposal,
        effects: Vec<(ApplicationId, Destination, Effect)>,
        state_hash: HashValue,
        key_pair: Option<&KeyPair>,
    ) {
        match self {
            ChainManager::Single(manager) => {
                if let Some(key_pair) = key_pair {
                    // Vote to confirm.
                    let BlockAndRound { block, .. } = proposal.content;
                    let value = Value::ConfirmedBlock {
                        block,
                        effects,
                        state_hash,
                    };
                    let vote_value = (Vote::new(HashValue::new(&value), key_pair), value);
                    manager.pending = Some(vote_value);
                }
            }
            ChainManager::Multi(manager) => {
                // Record the proposed block. This is important to keep track of rounds
                // for non-voting nodes.
                manager.proposed = Some(proposal.clone());
                if let Some(key_pair) = key_pair {
                    // Vote to validate.
                    let BlockAndRound { block, round } = proposal.content;
                    let value = Value::ValidatedBlock {
                        block,
                        round,
                        effects,
                        state_hash,
                    };
                    let vote_value = (Vote::new(HashValue::new(&value), key_pair), value);
                    manager.pending = Some(vote_value);
                }
            }
            _ => panic!("unexpected chain manager"),
        }
    }

    pub fn create_final_vote(
        &mut self,
        block: Block,
        effects: Vec<(ApplicationId, Destination, Effect)>,
        state_hash: HashValue,
        certificate: Certificate,
        key_pair: Option<&KeyPair>,
    ) {
        match self {
            ChainManager::Multi(manager) => {
                // Record validity certificate. This is important to keep track of rounds
                // for non-voting nodes.
                manager.locked = Some(certificate);
                if let Some(key_pair) = key_pair {
                    // Vote to confirm.
                    let value = Value::ConfirmedBlock {
                        block,
                        effects,
                        state_hash,
                    };
                    let vote_value = (Vote::new(HashValue::new(&value), key_pair), value);
                    // Ok to overwrite validation votes with confirmation votes at equal or
                    // higher round.
                    manager.pending = Some(vote_value);
                }
            }
            _ => panic!("unexpected chain manager"),
        }
    }
}

/// Chain manager information that is included in `ChainInfo` sent to clients.
#[derive(Clone, Debug, Serialize, Deserialize)]
#[cfg_attr(any(test, feature = "test"), derive(Eq, PartialEq))]
pub enum ChainManagerInfo {
    /// The chain is not active. (No blocks can be created)
    None,
    /// The chain is managed by a single owner.
    Single(SingleOwnerManagerInfo),
    /// The chain is managed by multiple owners.
    Multi(MultiOwnerManagerInfo),
}

/// Chain manager information that is included in `ChainInfo` sent to clients, about chains
/// with one owner.
#[derive(Clone, Debug, Serialize, Deserialize)]
#[cfg_attr(any(test, feature = "test"), derive(Eq, PartialEq))]
pub struct SingleOwnerManagerInfo {
    /// The owner of the chain.
    pub owner: Owner,
    /// Latest vote we cast.
    pub pending: Option<Vote>,
    /// The value we voted for, if requested.
    pub requested_pending_value: Option<Value>,
}

/// Chain manager information that is included in `ChainInfo` sent to clients, about chains
/// with multiple owners.
#[derive(Clone, Debug, Serialize, Deserialize)]
#[cfg_attr(any(test, feature = "test"), derive(Eq, PartialEq))]
pub struct MultiOwnerManagerInfo {
    /// The co-owners of the chain.
    /// Using a map instead a hashset because Serde treats HashSet's as vectors.
    pub owners: HashMap<Owner, ()>,
    /// Latest authenticated block that we have received, if requested.
    pub requested_proposed: Option<BlockProposal>,
    /// Latest validated proposal that we have seen (and voted to confirm), if requested.
    pub requested_locked: Option<Certificate>,
    /// Latest vote we cast (either to validate or to confirm a block).
    pub pending: Option<Vote>,
    /// The value we voted for, if requested.
    pub requested_pending_value: Option<Value>,
    /// The current round.
    pub round: RoundNumber,
}

impl From<&ChainManager> for ChainManagerInfo {
    fn from(manager: &ChainManager) -> Self {
        match manager {
            ChainManager::Single(s) => ChainManagerInfo::Single(SingleOwnerManagerInfo {
                owner: s.owner,
                pending: s.pending.as_ref().map(|(vote, _)| vote.clone()),
                requested_pending_value: None,
            }),
            ChainManager::Multi(m) => ChainManagerInfo::Multi(MultiOwnerManagerInfo {
                owners: m.owners.clone(),
                requested_proposed: None,
                requested_locked: None,
                pending: m.pending.as_ref().map(|(vote, _)| vote.clone()),
                requested_pending_value: None,
                round: m.round(),
            }),
            ChainManager::None => ChainManagerInfo::None,
        }
    }
}

impl Default for ChainManagerInfo {
    fn default() -> Self {
        ChainManagerInfo::None
    }
}

impl ChainManagerInfo {
    pub fn add_values(&mut self, manager: &ChainManager) {
        match (self, manager) {
            (ChainManagerInfo::None, ChainManager::None) => {}
            (ChainManagerInfo::Single(info), ChainManager::Single(s)) => {
                info.requested_pending_value = s.pending.as_ref().map(|(_, value)| value.clone());
            }
            (ChainManagerInfo::Multi(info), ChainManager::Multi(m)) => {
                info.requested_proposed = m.proposed.clone();
                info.requested_locked = m.locked.clone();
                info.requested_pending_value = m.pending.as_ref().map(|(_, value)| value.clone());
            }
            (_, _) => error!("cannot assign info from a chain manager of different type"),
        }
    }

    pub fn pending(&self) -> Option<&Vote> {
        match self {
            ChainManagerInfo::Single(s) => s.pending.as_ref(),
            ChainManagerInfo::Multi(m) => m.pending.as_ref(),
            _ => None,
        }
    }

    pub fn next_round(&self) -> RoundNumber {
        match self {
            ChainManagerInfo::Multi(m) => m.round.try_add_one().unwrap_or(m.round),
            _ => RoundNumber::default(),
        }
    }
}

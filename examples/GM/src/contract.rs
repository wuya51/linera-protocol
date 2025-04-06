use linera_sdk::{
    base::{ChainId, Timestamp},
    contract::ContractRuntime,
    views::{ViewStorageContext, RootView},
    Contract,
    abi::{ContractAbi, WithContractAbi},
};
use serde::{Deserialize, Serialize};
use crate::GmState;
// GM操作枚举
#[derive(Debug, Serialize, Deserialize)]
pub enum GmOperation {
    SendGmicrochains(ChainId),  // 修改操作名称为SendGmicrochains
}

// GM响应枚举
#[derive(Debug, Serialize, Deserialize)]
pub enum GmResponse {
    Ok,  // 操作成功
    Error(String),  // 操作失败
}

// GM合约ABI定义
pub struct GmAbi;
impl ContractAbi for GmAbi {
    type Operation = GmOperation;
    type Response = GmResponse;
}

// GM合约结构体
pub struct GmContract {
    state: crate::state::GmState,
    runtime: ContractRuntime<Self>,
}

// 合约实现
impl Contract for GmContract {
    type Message = ();
    type Parameters = ();
    type InstantiationArgument = ();
    
    // 加载合约
    async fn load(runtime: ContractRuntime<Self>) -> Self {
        let store = runtime.key_value_store();
        let context = ViewStorageContext::new_unsafe(store, vec![], ());
        let state = GmState::load(context).await.expect("加载状态失败");
        GmContract { state, runtime }
    }

    // 存储合约状态
    async fn store(mut self) {
        <GmState as RootView<ViewStorageContext>>::save(&mut self.state)
            .await
            .expect("保存状态失败");
    }
    
    // 执行操作
    async fn execute_operation(&mut self, operation: GmOperation) -> GmResponse {
        match operation {
            GmOperation::SendGmicrochains(target_chain) => {
                let sender = self.runtime.authenticated_signer().expect("No authenticated signer");
                let now = Timestamp::now().micros();
                
                // 保持键类型为 (Owner, ChainId)
                let key = (sender, ChainId::from(target_chain));
                
                // 检查24小时内是否已发送过
                if let Some(last_time) = self.state.last_gm.get(&key).await.expect("Failed to get timestamp") {
                    if now < last_time + 24 * 60 * 60 * 1_000_000 {
                        return GmResponse::Error("Can only send Gmicrochains once per 24 hours".to_string());
                    }
                }

                self.state.last_gm.insert(&key, now).expect("Failed to insert timestamp");
                GmResponse::Ok
            }
        }
    }

    // 合约初始化
    async fn instantiate(&mut self, _argument: Self::InstantiationArgument) {}
    async fn execute_message(&mut self, _message: Self::Message) {}
}

impl WithContractAbi for GmContract {
    type Abi = GmAbi;
}

#[cfg(not(test))]
pub fn main() {
    linera_sdk::contract!(GmContract);
}


// 测试路径是否正确
#[test]
fn test_imports() {
    let _ = crate::GmState;
    println!("Import path valid!");
}
searchState.loadedDescShard("regalloc2", 0, "An Allocation represents the end result of regalloc for an …\nAn allocation is one of two “kinds” (or “none”): …\nAny location is fine (register or stack slot).\nInvalid basic block: does not end in branch/ret, or …\nInvalid branch: operand count does not match sum of block …\nCritical edge is not split between given blocks.\nA branch has non-blockparam arg(s) and at least one of the …\nAn instruction to insert into the program to perform some …\nA VReg is live-in on entry; this is not allowed.\nOperand must be in a fixed register.\nA trait defined by the regalloc client to provide access …\nWrapper around either an original instruction or an …\nA position before or after an instruction at which we can …\nThe maximum spillslot index.\nA machine environment tells the register allocator which …\nMove one allocation to another. Each allocation may be a …\nAn <code>Operand</code> encodes everything about a mention of a …\nAn <code>OperandConstraint</code> specifies where a vreg’s value must …\nThe “kind” of the operand: whether it reads a vreg …\nThe “position” of the operand: where it has its …\nThe output of the register allocator.\nIterator over the instructions and edits in a block.\nA physical register. Contains a physical register number …\nA physical register set. Used to represent clobbers …\nA program point: a single point before or after a given …\nOperand must be in a register. Register is read-only for …\nAn error that prevents allocation.\nRegister classes.\nOptions for allocation.\nOn defs only: reuse a use’s register.\nInvalid SSA for given vreg at given inst: multiple defs or …\nA spillslot is a space in the stackframe used by the …\nOperand must be on the stack.\nToo many pinned VRegs + Reg-constrained Operands are live …\nA virtual register. Contains a virtual register number and …\nAdd a physical register (PReg) to the set.\nCreate a new ProgPoint after the given instruction.\nAllocations for each operand. Mapping from instruction to …\nAllow a single instruction to define a vreg multiple …\nCreate an <code>Operand</code> that designates a def of a vreg and …\nCreate an <code>Operand</code> that designates a use of a vreg and …\nIf this operand is for a fixed non-allocatable register …\nGet the allocation as a physical register, if any.\nGet the allocation as a spillslot, if any.\nCreate a new ProgPoint before the given instruction.\nGet the raw 32-bit encoding of this operand’s fields.\nGet the raw bits for the packed encoding of this …\nProvide the range of instruction indices contained in each …\nReturns an iterator over the instructions and edits in a …\nGet the block parameters for a given block.\nGet the CFG predecessors for a given block.\nGet CFG successors for a given block.\nIf <code>insn</code> is a branch at the end of <code>block</code>, returns the …\nChecker: verifies that spills/reloads/moves retain …\nThe register class.\nGet the register class used by this operand.\nGet the “constraint” of this operand, i.e., what …\nReturns whether the given register is part of the set.\nDebug info: a labeled value (as applied to vregs by …\nGet the VRegs for which we should generate value-location …\nEdits (insertions or removals). Guaranteed to be sorted by …\nCreate an empty set.\nGet the index of the entry block.\nCreate an <code>Operand</code> that always results in an assignment to …\nSome <code>PReg</code>s can be designated as locations on the stack …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct an <code>Operand</code> from the raw 32-bit encoding returned …\nConstruct an allocation from its packed encoding.\nConstruct a PReg from the value returned from <code>.index()</code>.\nConstruct from the raw 32-bit encoding.\nThe physical register number, as encoded by the ISA for …\nGet an index into the (not necessarily contiguous) index …\nGet the spillslot index for this spillslot.\nGet the index of the spillslot or register. If register, …\nIndex sets: sets of integers that represent indices into a …\nGet the instruction that this ProgPoint is before or after.\nAllocation offset in <code>allocs</code> for each instruction.\nGet the allocations assigned to a given instruction.\nGet the clobbers for an instruction; these are the …\nGet the Operands for an instruction.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn the “invalid PReg”, which can be used to …\nGet the invalid spillslot, used for initializing data …\nDetermine whether an instruction is the end-of-block …\nIs this the invalid spillslot?\nDetermine whether an instruction is a move; if so, return …\nIs the allocation “none”?\nIs the given vreg pinned to a preg? If so, every use of the\nIs the allocation a register?\nDetermine whether an instruction is a return instruction.\nIs the allocation not “none”?\nIs the allocation on the stack (a spillslot)?\nIs this a valid spillslot (not <code>SpillSlot::invalid()</code>)?\nGet the “kind” of this operand: a definition (write), …\nGet the allocation’s “kind”: none, register, or …\nWhen providing a spillslot number for a multi-slot …\nCreate a new PReg. The <code>hw_enc</code> range is 6 bits.\nCreate a new SpillSlot.\nConstruct a new operand.\nCreate a new ProgPoint before or after the given …\nGet the “next” program point: for After, this is the …\nNon-preferred physical registers for each class. These are …\nGet the “none” allocation, which is distinct from the …\nHow many blocks are there?\nHow many instructions are there?\nHow many spillslots are needed in the frame?\nGet the number of <code>VReg</code> in use in this function.\nGet the spillslot <code>offset</code> slots away.\nGet the “position” of this operand, i.e., where its …\nGet the “position” (Before or After) relative to the …\nPreferred physical registers for each class. These are the …\nGet the “previous” program point, the inverse of …\nGet the VRegs that are pointer/reference types. This has …\nCreate an allocation into a register.\nCreate an <code>Operand</code> that designates a definition of a VReg …\nCreate an <code>Operand</code> that designates a definition of a VReg …\nCreate an <code>Operand</code> that designates a def of a vreg and …\nCreate an <code>Operand</code> that designates a use of a vreg and …\nCreate an <code>Operand</code> that designates a def of a vreg that must\nCreate an <code>Operand</code> that designates a def (and use) of a …\nCreate an <code>Operand</code> that designates a use of a VReg that must\nCreate an <code>Operand</code> that designates a use of a VReg that must\nRemove a physical register (PReg) from the set.\nDetermine whether an instruction requires all …\nRun the allocator.\nSafepoint records: at a given program point, a …\nHow many logical spill slots does the given regclass …\nSSA-related utilities.\nCreate an allocation into a spillslot.\nInternal stats from the allocator.\nConvert to a raw encoding in 32 bits.\nAdd all of the registers in one set to this one, mutating …\nRun the SSA validator before allocating registers.\nAdd extra verbosity to debug logs.\nGet the virtual register designated by an operand. Every …\nAdd a physical register (PReg) to the set, returning the …\nA single error detected by the regalloc checker.\nA set of errors detected by the regalloc checker.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new checker for the given function, initializing …\nBuild the list of checker instructions based on the given …\nFind any errors, returning <code>Err(CheckerErrors)</code> with all …\nA conceptually infinite-length set of indices that allows …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")
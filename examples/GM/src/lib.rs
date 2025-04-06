//! GM模块入口
//! - contract: 合约实现
//! - service: 服务实现  
//! - state: 共享状态定义

pub mod state;
pub mod contract;
pub mod service;

// 确保使用完整路径重新导出
pub use self::contract::GmResponse;
pub use self::state::GmState;

// 强制编译器识别crate路径
#[macro_export]
macro_rules! assert_crate_paths {
    () => {
        #[allow(unused_imports)]
        use crate::{contract, state};
    };
}




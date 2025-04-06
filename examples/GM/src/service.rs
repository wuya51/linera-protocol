use linera_sdk::{
    abi::{ServiceAbi, WithServiceAbi},
    Service,
};
use crate::GmResponse;

// GM服务结构体
pub struct GmService;

// 服务实现
impl Service for GmService {
    type Parameters = ();

    // 创建新服务实例
    async fn new(_runtime: linera_sdk::ServiceRuntime<Self>) -> Self {
        Self
    }

    // 处理查询请求
    async fn handle_query(&self, _query: Vec<u8>) -> GmResponse {
        GmResponse::Error("Not implemented".into())  // 默认返回未实现
    }
}

// 服务ABI定义
pub struct GmServiceAbi;
impl ServiceAbi for GmServiceAbi {
    type Query = Vec<u8>;
    type QueryResponse = GmResponse;
}

impl WithServiceAbi for GmService {
    type Abi = GmServiceAbi;  // 指定服务ABI类型
}

#[cfg(not(test))]
pub fn main() {
    linera_sdk::service!(GmService);
}
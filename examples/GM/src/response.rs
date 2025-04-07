// src/response.rs
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub enum GmResponse {
    Ok,  // 操作成功
    Error(String),  // 操作失败
}
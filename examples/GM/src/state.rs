// src/state.rs

use linera_sdk::{
    base::{ChainId, Owner},
    views::{MapView, RootView, ViewStorageContext, View}
};

#[derive(RootView)]
#[view(context = "ViewStorageContext")]
pub struct GmState {
    pub last_gm: MapView<(Owner, ChainId), u64>,
}

impl GmState {
    pub async fn load(context: ViewStorageContext) -> Result<Self, linera_views::views::ViewError> {
        let last_gm = MapView::load(context).await?;
        Ok(Self { last_gm })
    }
}
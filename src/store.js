import { configureStore } from '@reduxjs/toolkit'
import nftReducer from './nft_loader/nftSlice' //import our reducer from step 4
import likeReducer from  './like_loader/likeSlice'
import filterReducer from './filter-loader/filterSlice'
export default configureStore({
  reducer: {
    reducer: nftReducer ,
    Likes : likeReducer ,
    Filter : filterReducer
    //add our reducer from step 4
  }
})

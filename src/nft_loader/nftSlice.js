import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import axios from 'axios'
import NFT from '../deploy/NFT.json'
import Market from '../deploy/NFTMarket.json'

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {

    const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
    const tokenContract = new ethers.Contract(NFT.address, NFT.abi, provider)
    console.log("fu")
    const marketContract = new ethers.Contract(Market.address, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    return items

  }
);

export const nftSlice = createSlice({
  name: 'nft',
  initialState: {
    value: []
  },
  reducers: {
    load_nft:(state , {payload}) => {

        state.value = payload ;
  
    },
  
  } ,

    extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, value: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
})

// each case under reducers becomes an action
export const { load_nft } = nftSlice.actions
export default nftSlice.reducer
export const getAllMovies = (state) => state.reducer.value;





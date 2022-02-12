import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchAsyncLikes = createAsyncThunk(
  "movies/fetchAsyncLikes",
  async () => {

  const meta = await axios.get("http://127.0.0.1:8000/userp/").then((response) => {
        return response.data;

    });

    return meta

  }
);

export const likeSlice = createSlice({
  name: 'like',
  initialState: {
    value: []
  },
  reducers: {
    load_like:(state , {payload}) => {

        state.value = payload ;
  
    },
  
  } ,

    extraReducers: {
    [fetchAsyncLikes.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncLikes.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, value: payload };
    },
    [fetchAsyncLikes.rejected]: () => {
      console.log("Rejected!");
    },
  },
})

// each case under reducers becomes an action
export const { load_like } = likeSlice.actions
export default likeSlice.reducer
export const getAllLikes = (state) => state.Likes.value;





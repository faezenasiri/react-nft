import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchAsyncFilter = createAsyncThunk(
  "filter/fetchAsyncFilter",
  async () => {

  const meta = await axios.get("http://127.0.0.1:8000/nft/").then((response) => {
        return response.data;

    });

    return meta

  }
);

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: []
  },
  reducers: {
    load_filter:(state , {payload}) => {

        state.value = payload ;
  
    },
  
  } ,

    extraReducers: {
    [fetchAsyncFilter.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncFilter.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, value: payload };
    },
    [fetchAsyncFilter.rejected]: () => {
      console.log("Rejected!");
    },
  },
})

// each case under reducers becomes an action
export const { load_filter } = filterSlice.actions
export default filterSlice.reducer
export const getFilter = (state) => state.Filter.value;

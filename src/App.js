import './App.css';
import {  useDispatch } from 'react-redux'
import { useEffect } from 'react';

  import {
  fetchAsyncMovies,
 
} from "./nft_loader/nftSlice";
import Yo from './yo';
import Yoyo from './yoyo';
import Home from './first-page/Home';
import { fetchAsyncLikes } from './like_loader/likeSlice';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nftdetial from './nft-details/Nftdetial';
import { fetchAsyncFilter } from './filter-loader/filterSlice';


function App() {

      const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncLikes());
    dispatch(fetchAsyncFilter());
  }, [dispatch]);
  return (
     <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yo" element={<Yoyo />} />
      <Route path="/:nftid" element={<Nftdetial />} />
      </Routes>
    </div>
     </Router>
  );
}

export default App;

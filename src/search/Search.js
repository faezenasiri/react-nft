import { useState } from "react";
import { useSelector } from 'react-redux'
import {getAllMovies} from '../nft_loader/nftSlice'

const Search = () => {
  const [searchValue, setSearchValue] = useState("");


   const nfts = useSelector(getAllMovies)
  return (
    <div className="App">
      <h2>Search </h2>

      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
     
      <div>
        {nfts

          .filter((nft) => nft.name.match(new RegExp(searchValue, "i")))

          .map((nft) => { if (searchValue){
              
            return ( 
                  <div className ="flex-shrink-0">
                   
                    <a >{nft.name}</a>
                      
                  </div>
            );}
          })}
      </div>
    </div>
  );
};

export default Search;
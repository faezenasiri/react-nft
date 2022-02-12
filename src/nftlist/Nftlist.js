import React from 'react';
import {getAllMovies} from '../nft_loader/nftSlice'
import { useSelector } from 'react-redux'
import Nftcard from '../nft-card/Nftcard';
import './Nftlist.css'

const Nftlist = () => {
    const nfts = useSelector(getAllMovies)
    let renderShows
    console.log(nfts)
      renderShows =
    nfts.length > 0 ? (
      nfts.map((nft, index) => <Nftcard key={index} nft={nft} />)
    ) : (
      <div className="shows-error">
        <h3>'loading'</h3>
      </div>
    );
     
    return (
            <div className="movie-wrapper">
      <div className="nft-list">
        <h2>NFTS</h2>
        <div className="nft-container">{ renderShows}</div>
      </div>
    </div>
                  
       
    );}

export default Nftlist;
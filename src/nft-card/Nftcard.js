import React from 'react';
import { Link } from "react-router-dom";
import './Nftcard.css'



const Nftcard = (props) => {
  const { nft } = props;
    return (
       <div className="card-item">
      
        <div className="card-inner">
            <Link to={`/${nft.tokenId}`}>
          <div className="card-image">
            <img src={nft.image}  />
          </div>
          </Link>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{nft.name}</h4>
              <p>{nft.description}</p>
            </div>
          </div>
        </div>
      
 
            
        </div>
    );
};

export default Nftcard;
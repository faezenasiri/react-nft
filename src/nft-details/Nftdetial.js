import React from 'react';
import { useSelector } from 'react-redux';
import {  useParams } from "react-router-dom";
import Likebutton from '../like-button/Likebutton';
import { getAllLikes } from '../like_loader/likeSlice';

const Nftdetial = () => {
      let { nftid } = useParams();
      
      const like_nft = useSelector(getAllLikes).filter(i =>  i.nftlike === nftid)
      let is_liked =  Object.keys(like_nft).length

       let renderlike

     if( is_liked > 0 ){ 
         renderlike =  

        <div>
                  THIS IS THE PROFILE PAGE FOR {nftid}!
                  <Likebutton is_liked = {is_liked}/>
        </div>

    }
    else
        renderlike = 
        <div>

                  THIS  {nftid}!
                   <Likebutton is_liked = {0}/>
        </div>

           


      
   
    return (
        <div>
            {renderlike}
        </div>
  
  );
   
};


export default Nftdetial;
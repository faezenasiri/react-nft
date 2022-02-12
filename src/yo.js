import React from 'react';
import {getAllMovies} from './nft_loader/nftSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Yo = () => {
    
    
    const nft_s = useSelector(getAllMovies)


    console.log(nft_s)



  if (nft_s.length ) {



  return (
    <div>
      <div>
       {nft_s[1].name}
             <Link to="yo">Click to view our about page</Link>

      </div>

    </div>
  )
  }

  return (<div>"loading"</div>)
};

export default Yo;



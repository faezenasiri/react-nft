import React from 'react';
import { useSelector } from 'react-redux'
import { getAllLikes } from './like_loader/likeSlice';


const Yoyo = () => {
    
    
    const like_s = useSelector(getAllLikes)


    console.log(like_s)



  if (like_s.length ) {



  return (
    <div>
      <div>
       {'nft_s[1].name'}
      </div>

    </div>
  )
  }

  return (<div>"loading"</div>)
};

export default Yoyo;


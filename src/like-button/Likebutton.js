import React from 'react';

const Likebutton = (props) => {
    let  {is_liked}  = props;
    console.log(is_liked)
    return (
        <div>
        <div>  {is_liked}</div>
        </div>
    );
};

export default Likebutton;
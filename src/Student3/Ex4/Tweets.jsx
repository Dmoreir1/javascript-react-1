import React from 'react'; 
import { Tweet1 } from './Tweet1';
import { Tweet2 } from './Tweet2';
import { Tweet3 } from './Tweet3';
import { useState } from "react"; 

export const Tweets = () => {
    let [counter, setCounter] = useState(0);

  const onHandleClick = ( likeClick ) => {
        // eslint-disable-next-line no-lone-blocks
        if (likeClick === "Like"); {
      setCounter(++counter); 
    }
    
  };
    return (
<><div className="tweets">
<div>Total Likes: { counter } </div>
    
    <Tweet1 onClicked = {onHandleClick}/>
    <Tweet2 onClicked = {onHandleClick}/>
    <Tweet3 onClicked = {onHandleClick}/>
    
</div></> 
    )
}
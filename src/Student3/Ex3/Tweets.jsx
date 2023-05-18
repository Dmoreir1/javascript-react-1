import React from 'react'; 
import { Tweet1 } from './Tweet1';
import { Tweet2 } from './Tweet2';
import { Tweet3 } from './Tweet3';

export const Tweets = () => {
    return (
<><div className="tweets">
<div>Tweet Storm</div>
    <Tweet1></Tweet1>
    <Tweet2></Tweet2>
    <Tweet3></Tweet3>
</div></> 
    )
}
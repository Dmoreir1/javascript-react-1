import React from "react";

export const Tweet2 = ({onClicked}) => {
    return( 
        <> <div className = "tweet2" >
            I just bought a new BMW X5!!! <button onClick = {() => onClicked("like")}>Like!</button> </div></>
    )
}
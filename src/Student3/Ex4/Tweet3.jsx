import React from "react";

export const Tweet3 = ({onClicked}) => {
    return( 
        <> <div className = "tweet3" >
            I just bought another BMW!!!! <button onClick = {() => onClicked("like")}>Like!</button>  </div></>
    )
}
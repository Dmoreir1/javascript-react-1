import React from "react";

export const Tweet1 = ({onClicked}) => {
    return( 
        <> <div className = "tweet1" >
            "It's payday!!!<button onClick = {() => onClicked("like")}>Like!</button> </div>
            </>
    )
}
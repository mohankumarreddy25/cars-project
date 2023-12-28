import React,{useState} from "react";
function Child(){
    const[initialvalue,updatedvalue]=useState(0)
    return(
        <div>
            <h1>the values sre increment and decrement</h1>
            <button onClick={()=>{updatedvalue(initialvalue +1)}}>inctement</button>
            <button onClick={()=>{updatedvalue(initialvalue -1)}}>decrement</button>
        </div>
    )
}
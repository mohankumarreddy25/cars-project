// import react,{usestate} from 'react';
// function Child(){
//     const[initialvalue,updatevalue]=usestate(0)
    
//     function increment (){
//         initialvalue(updatevalue)
//     }

//     function decrement (){
//         initialvalue(updatevalue)
//     }

//     return(
//         <div>
//             <button onClick={increment}> increment</button>
//             <button onClick={decrement}>decrement</button>
            
//         </div>
//     )
// }
// export default Child


import React,{useState} from "react";
function Child(){
    const[initialvalue,updatedvalue]=useState(0)
    return(
        <div>
            <h1>the values are increment and decremenet</h1>
            <h3>{initialvalue}</h3>
            <button onClick={()=>{updatedvalue(initialvalue  +1)}}>Increment</button>
            <button onClick={()=>{updatedvalue(initialvalue -1) }}>Decrement</button>
        </div>
    )
}
export default Child
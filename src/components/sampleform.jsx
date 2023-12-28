// import React, { useState } from "react";
// function Mohan(){
//     const [data,setData]=useState({
//         username:"",
//         password :"",
//         confirmpassword :""
//     })
//     const {username,password,confirmpassword}=data;

//     const changeHandler = (e)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//    const submitHandler = (e)=>{
//     e.preventDefault();
    
//     console.log(data)
//    }    
//     return(
//         <div>
//             <form onSubmit={submitHandler}>
//                 <input type="text" name="username" value={username} onChange={changeHandler}/><br />
//                 <input type="password" name="password" value={password} onChange={changeHandler}/> <br />
//                 <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} /><br />
//                 <button type="submit">submit</button>
//             </form>
//         </div>
//     )
// }
 
// export default Mohan;



import React, { useState } from "react";
function Mohan (){
    const [data,setData]=useState({
        username :"",
        password :"" ,
        conformpassword:""
 })  
    const{username,password,conformpassword}=data;
    const changeHandler=(e)=>{
        setData({...data,[e.target.name] :e.target.value})
    } 

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" value={username} onChange={changeHandler}/>
                <input type="password" name="password" value={password} onChange={changeHandler} />
                <input type="password" name="conformpassword" value={conformpassword} onChange={changeHandler}  />
                <input type="submit" name="submit" />
            </form>
        </div>
    )

}

export default Mohan;

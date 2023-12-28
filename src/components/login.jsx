
        // import React from "react";
        // import { CSSProperties } from "react";
        // // import { withRouter } from 'react-router-dom';
        // class Login extends React.Component{
        //     constructor(props){
        //         super(props);


        //         this.state = {
        //             status:'login'
        //         }
        //         this.checkstatus=this.checkstatus.bind(this)
        //     }
        //     checkstatus(){
        //         // console.log('mohan')
        //        this.setState({
        //         status:'log-out'
        //        })
        //     }
        //     render(){
        //         return(
        //                 <div>
        //                       <form>
        //                         <div class="mb-3">
        //                         <label for="exampleInputEmail1" class="form-label"> Email address</label>
        //                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        //                         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        //                         </div>
        //                         <div class="mb-3">
        //                         <label for="exampleInputPassword1" class="form-label">Password</label>
        //                         <input type="password" class="form-control" id="exampleInputPassword1" />
        //                         </div>
        //                         <div class="mb-3 form-check">
        //                         <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        //                         <label class="form-check-label" for="exampleCheck1">Check me out</label>
        //                         </div>
        //                         <button type="submit" class="btn btn-primary">Submit</button>
        //                         </form> 

                           

                          
                        

                        
                            
        //                 </div>
        //         )
        //     }
        // }


        // export default Login;



        import React,{useState} from 'react';
        import { useNavigate } from "react-router-dom";
        function Login(){
           
            const [formData,setFormData] = useState({
                email : '',
                password: '',
                err:''
            })
        
            const navigate = useNavigate();
        
           const onChangeHandler = (e) => {
            console.log("event",e);
            const { name, value } = e.target;
           
            console.log("event in onchange",e.target.value);
            console.log("event in onchange-----",e.target.value);
           
            console.log("change",formData.email);
            console.log("change",formData.password)
        
            // setFormData([e.target.name] : e.target.value)
            setFormData({
                ...formData,
                [name]: value,
              });
        
           }
        
           const submitHandle = (event) =>{
            console.log('Form submitted:', formData);
            event.preventDefault();
        
            localStorage.setItem("email", "mohan@gmail.com");
            localStorage.setItem("password", "1234");
            let emailData = localStorage.getItem("email");
            let passwordData = localStorage.getItem("password");
        
            if(formData.email == emailData && formData.password == passwordData){
                navigate("/Home");
            }
            else{
                alert("Please enter password and email correctly")
            }
        
           }
            return(
                <div>
                    
                     <div className="row justify-content-center bagroungimage ">
                        <div className="col-3">
                        <form className="center" onSubmit={submitHandle} style={{marginLeft:-40}}>
                            <h3 style={{marginTop:220,marginBottom:30,color:"white"}}>Login Form </h3>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="text" className="form-control"  aria-describedby="emailHelp" name="email" value={formData.email} placeholder="Enter email" onChange={onChangeHandler}/>
                                
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control"  placeholder="Password" name="password" value={formData.password} onChange={onChangeHandler}/>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{marginTop : 20}}>Submit</button>
                        </form>
                        </div>
                    </div>

                    
                </div>
            )
        }
        
        export default Login;
import React, { Component } from "react";  
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username :"",
            password :'',
            conformpassword :""

        };
      }   
      
handleUsernameChange =(event)=>{
        this.setState({
            username: event.target.value
        });
    }


handlePasswordChange = (event) => {
  this.setState({
    password: event.target.value
  });
}
handleConformPasswordChange = (event) => {
  this.setState({
    conformpassword: event.target.value
  });
}
handleSubmit = (event) => {
  event.preventDefault();

  console.log(this.state);
}




render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChange={this.handleConfirmPasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
} 

export default Form;
    



// import React, { Component } from "react";  

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       confirmPassword: ""
//     };
//   }

//   handleUsernameChange = (event) => {
//     this.setState({
//       username: event.target.value
//     });
//   }

//   handlePasswordChange = (event) => {
//     this.setState({
//       password: event.target.value
//     });
//   }

//   handleConfirmPasswordChange = (event) => {
//     this.setState({
//       confirmPassword: event.target.value
//     });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
   
//     console.log(this.state);

    
//     // alert(`Submitted Data:\nUsername: ${this.state.username}\nPassword: ${this.state.password}\nConfirm Password: ${this.state.confirmPassword}`);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           {/* <input type="username"/> */}
//           <input
//             type="text"
//             placeholder="email"
//             value={this.state.username}
//             onChange={this.handleUsernameChange}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="password"
//             value={this.state.password}
//             onChange={this.handlePasswordChange}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="confirm password"
//             value={this.state.confirmPassword}
//             onChange={this.handleConfirmPasswordChange}
//           />
//           <br />
//           <input type="submit" />
//         </div>
//       </form>
//     );
//   }
// }

// export default Form;

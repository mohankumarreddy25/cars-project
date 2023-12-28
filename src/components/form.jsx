import React from "react";
class Mohan extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    my name is {this.props.Name}{this.props.Designation}
                </h2>
                <button>login</button>
            </div>
        )
    }
}
export default Mohan;

import React, { Component } from 'react';
import image from "../../static/assets/images/hoodedMage.jpg"



export default class Login extends Component{
    handleClick(props) {
        console.log("this is a test!")
    }


     render(){
         return <button onClick={ () => this.props.handleClick()}
        className="button" type="input"> Login</button>
            
        
    }
}


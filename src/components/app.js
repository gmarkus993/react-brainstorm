import React, { Component } from 'react';
import Login from "./login"
import Register from "./register"
import Main from "../style/main.scss"
import image from "../../static/assets/images/hoodedMage.jpg"




export default class App extends Component {
  constructor(props){
    super(props)
    this.sayHello = this.sayHello.bind(this)
  }
  sayHello() {
    alert('Would you like to login?')
  }


  render() {
    return (
      <div className='background' 
        style={{
          backgroundImage: `url(${image})`,
          height: '600px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        
        }}>
        <div className = 'button-group'>
          <button onClick={this.sayHello} 
          style={{height: '22px'}}
          >TEST</button>
          <Login/>
          <Register/>
        </div>
      </div>
    );
  }
}

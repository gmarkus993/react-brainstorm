import React, { Component } from 'react';
import Login from "./login"
import Register from "./register"
import Main from "../style/main.scss"
import image from "../../static/assets/images/hoodedMage.jpg"




export default class App extends Component {
  render() {
    return (
      <div className='background' 
        style={{
          backgroundImage: `url(${image})`,
          imageOrientation: 'from-image',
          height: '800px',
          overflow: 'hidden',
        
        }}>
        <div className = 'button-group'>
          <Login/>
          <Register/>
        </div>
      </div>
    );
  }
}

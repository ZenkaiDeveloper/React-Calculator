import React, { Component } from 'react';
import './display.css'

export default class Display extends Component{



  render(){
    return(
      <div className="display">
        <h2>{this.props.currentExpression}</h2>
        {this.props.display()}
      </div>
    )
  }
}

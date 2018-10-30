import React, { Component } from 'react';
import "./operations.css"


export default class Operations extends Component{

  handleClick = (event)=>{
    if (event.target.innerText === "DEL") {
      this.props.clearExpression()
    }else if (event.target.innerText === "=") {
      this.props.evaluateExpression();
    }else if (event.target.innerText.length ===1) {
      this.props.sendValue(event.target.innerText)
      this.props.sendExpression(event.target.innerText)
    }
  }

  render(){
    const operationsArr = ["/","DEL","*"," ","-"," ","+","="];
    return(
      <div className="operationsWrapper" onClick={this.handleClick}>{this.props.loadData(operationsArr)}</div>
    )
  }
}

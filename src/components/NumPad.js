import React, {Component} from 'react';
import './numpad.css'


export default class NumPad extends Component{

  generateNums = ()=>{
    let arr = [];
    for (let i = 1; i < 10; i++) {
      arr.push(
        <div onClick={this.handleClick} id ={i}><h2 className="cell">{i}</h2></div>)
    }
    return arr
  }

  handleClick = (event)=>{
    if (event.target.innerText) {
      this.props.sendValue(event.target.innerText)
      this.props.sendExpression(event.target.innerText)
    }

  }


  render(){
    return(
      <div className="numPadWrapper">
      {this.generateNums()}
      <div onClick={this.handleClick} id="0"><h2>0</h2></div>
      <div onClick={this.handleClick} id="."><h2>.</h2></div>
      <div onClick={this.handleClick} id="blank"></div>
      </div>
    )
  }
}

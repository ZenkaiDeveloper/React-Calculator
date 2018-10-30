import React, { Component } from 'react';
import './phone.css';
import Display from './display'
import NumPad from './NumPad'
import Operations from './operations'
import Scientific from './Scientific'

class Phone extends Component{
  constructor(){
    super()
    this.state={
      currentValue:null
    }
  }

  loadArrData = (arr)=>{
    let resultArr = [];
    arr.forEach((operation)=>{
      resultArr.push(<div>{operation}</div>)
    })
    return resultArr;
  }


  setCurrentValue = (value)=>{
    this.setState({
      currentValue: value
    })
  }

  display = ()=>{
    return <h1>{this.state.currentValue}</h1>
  }


  render(){
    return(
      <div className="phone">
        <Display display={this.display} currentExpression={this.props.currentExpression} />
        <NumPad sendExpression={this.props.sendExpression} sendValue={this.setCurrentValue} />
        <Operations display={this.display} evaluateExpression={this.props.evaluateExpression} clearExpression={this.props.clearExpression} sendExpression={this.props.sendExpression} sendValue={this.setCurrentValue} loadData={this.loadArrData} />
        <Scientific sendValue={this.setCurrentValue} loadData={this.loadArrData} />
      </div>
    )
  }
}

export default Phone

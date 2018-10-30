import React, { Component } from 'react';
import './App.css';
import Phone from './phone'


class App extends Component {

  constructor(){
    super()
    this.state = {
      currentExpression:"",
      answer: null
    }
  }


  getCurrentExpressionFromPhone = (expression) =>{
    this.setState({
      currentExpression: this.state.currentExpression + expression
    })
  }

  clearExpression = ()=>{
    this.setState({
      currentExpression: ""
    })
  }



  evaluateExpression = ()=>{
    let answer = eval(this.state.currentExpression);
    this.setState({
      currentExpression: answer
    })
  }



  render() {
    return (
      <div className="calculator">
        <Phone evaluateExpression={this.evaluateExpression} clearExpression={this.clearExpression} currentExpression={this.state.currentExpression} answer={this.state.answer} sendExpression={this.getCurrentExpressionFromPhone} />
      </div>
    )
  }
}

export default App;

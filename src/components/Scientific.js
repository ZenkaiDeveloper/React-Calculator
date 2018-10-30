import React, { Component } from 'react'
import './Scientific.css'

export default class Scientific extends Component{

  render(){
    const scientifiOperations = ["INV","DEG","%","sin","cos","tan","ln","log","!","pi","e","^","(",")","sqrt"]


    return(
      <div className="scientific-wrapper">{this.props.loadData(scientifiOperations)}</div>
    )
  }




}

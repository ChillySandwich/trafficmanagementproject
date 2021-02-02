//const React = require('react')
import React, { Component } from "react";
export class Upload extends Component{
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
    //'Continue' event handler, calls the nextStep method from MultiStepHandler to go forward a page
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }
  //'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
        <input type='button' value="submit" onClick={this.continue}/> 
        <input type='button' value="previous page" onClick={this.back}/>
      </div>
    );
  }
}
export default Upload

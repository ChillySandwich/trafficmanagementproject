
import React, { Component } from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';
import Warning from '../Warning.png';

export default class Login extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  //'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <div >
        <h1 >Disclaimer | Whakakahoretanga <img src={Warning} style={{margin: '50px', width:'50px', height:'60px'}}/> </h1>  
       
        <p className="disclaimerParagraph">
    
    This is a prototype of a platform built to help aid in the process of creating a workplace traffic management plan - WTMP. The information included in this prototype does not replace professional advice and we encourage you to contact your local WorkSafe liason to recieve feedback on the draft created within this app. All information included is true to the best of our knowledge but we do not accept any liability for damages resulting from the use of the draft WTMP output of this app. 
    </p>
        <input className='buttonStyle' type='button' value="Back" onClick={this.back} />
        <input className='buttonStyle' type='button' value="Agree" onClick={this.continue} />

        <h6>By clicking 'Agree' you agree to TMP New Zealands Disclaimer</h6>


      </div>
    );
  }
}

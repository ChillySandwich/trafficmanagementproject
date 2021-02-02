
import React, { Component } from "react";
import '../App.css';
import { Link } from 'react-router-dom';
//import * as Mui from '@material-ui/core';
import { Checkbox } from '@material-ui/core';


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
    const { values: { email }, handleChange } = this.props;
    return (
      <div>
        <h1> {email} </h1>
        <h1 >Disclaimer | Whakakahoretanga </h1>
        <p className="disclaimerParagraph">The Commissioner is not liable for any damages arising in contract, tort or otherwise from the use of or inability to use this site or any material contained in it, or from any action or decision taken as a result of using the site.

        The materials on this site comprise the Information Commissioner's views; they do not constitute legal or other professional advice. You should consult your professional adviser for legal or other advice.

This site offers links to other sites thereby enabling you to leave this site and go directly to the linked site. The Information Commissioner is not responsible for the content of any linked site or any link in a linked site. The Commissioner is not responsible for any transmission received from any linked site. The links are provided to assist visitors to the Information Commissioner's site and the inclusion of a link does not imply that the Information Commissioner endorses or has approved the linked site.</p>
        <input className='buttonStyle' type='button' value="Back" onClick={this.back} />
        <input className='buttonStyle' type='button' value="Agree" onClick={this.continue} />

        <h6>By clicking 'Agree' you agree to TMP New Zealands Disclaimer</h6>


      </div>
    );
  }
}

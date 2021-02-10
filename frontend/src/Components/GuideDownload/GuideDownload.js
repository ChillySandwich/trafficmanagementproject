
import React, { Component } from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Logo from '../logo.png';
import Graphic from '../Discuss.png';
import Download from '../Download.JPG';
import Preview from '../Preview.png';

export default class GuideDownload extends Component {
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
<div className="download-page-container">
    <div >
            <img alt="discussGraphic" className="discussGraphic" style={{margin: '50px', width:'450px', height:'600px'}}src={Graphic} />
    </div>

      <div>
        <h1 > Korero ki to Roopu | Time to Talk to the Team </h1>
        <p className="disclaimerParagraph">This downloadable guide has information about what a WTMP is and who needs one. It will help you gather the information you need about your site equipment, hazards and controls so you can make your own WTMP.</p>
        <button className='buttonStyle' value="Download PDF Guide"> Download PDF Guide</button>
        <button className='buttonStyle' value="View PDF Guide"> <img src={Preview} align="right|middle"/> View PDF Guide </button>
        <input className='buttonStyle' type='button' value="Back" onClick={this.back} />
        <input className='buttonStyle' type='button' value="Continue" onClick={this.continue} />
      </div>
</div>  
    );
  }
}

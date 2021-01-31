
import React, { Component } from "react";
import {Link } from 'react-router-dom';
//import * as Mui from '@material-ui/core';
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
            <div>
<h3>Disclaimer</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<input type='button' value="Agree" onClick={this.continue}/> 
        <input type='button' value="previous page" onClick={this.back}/>
</div>
            );
        }
    }

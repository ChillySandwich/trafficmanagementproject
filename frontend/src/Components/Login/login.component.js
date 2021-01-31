import { StylesProvider } from "@material-ui/core";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Link } from 'react-router-dom';
import SiteSelection from '../SiteSelection/SiteSelection';
import { Button } from 'react-bootstrap';
export default class Login extends Component {

    //make a 'continue' action handler, where the state prop is altered through the nextStep method in the 'MultiStepHandler' component. call this 'continue' handler on the submit button on page.
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <form>

            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <input type='button' value="Submit" onClick={this.continue} />
            
            <p className="forgot-password text-right"> 
           
                Forgot <a href="#">password?</a>
            </p>

            </form>
        
        );
    }
} 

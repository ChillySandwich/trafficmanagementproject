import { StylesProvider } from "@material-ui/core";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import {Link } from 'react-router-dom';
import SiteSelection from '../SiteSelection/SiteSelection';
import { Button } from 'react-bootstrap';
import Logo from '../logo.png';
import '../App.css';



export default class Login extends Component {
     

    //make a 'continue' action handler, where the state prop is altered through the nextStep method in the 'MultiStepHandler' component. call this 'continue' handler on the submit button on page.
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <Grid container spacing={3}>

            <Grid item xs={6} className = "logoSide">
            <img alt="Logo" className="Logo" src={Logo} />
            </Grid>

            <Grid item xs={6}>
                <div className="loginForm">
            <form >

            <h3>Welcome | Nau Mai</h3>

            <div>
                <label>Email</label>
                <input type="email" className = "emailInput" onChange={handleChange('email')} defaultValue={values.email} placeholder="Enter email" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div>
                    <input type="checkbox" id="customCheck1" />
                    <label htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <input type='button' value="Submit" onClick={this.continue} />
            
            <p > 
           
                Forgot <a href="#">password?</a>
            </p>

            </form>
            </div>
            </Grid>
            </Grid>
        );
    }
} 

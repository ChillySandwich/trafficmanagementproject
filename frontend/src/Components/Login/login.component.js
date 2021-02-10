import { StylesProvider } from "@material-ui/core";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SiteSelection from '../SiteSelection/SiteSelection';
import { Button } from 'react-bootstrap';
import Logo from '../logo.png';
import Graphic from '../ipad.png';
import '../App.css';
import { FaDivide } from "react-icons/fa";



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

                <Grid item xs={6} className="logoSide" style={{marginBottom: "10px"}}>

<br></br>
                    <div style={{color:'white', marginLeft: "5px", textAlign: "left"}}> 
                      1) Step by step guide to creating a Workplace Traffic Management Plan -WTMP
                    </div>
                    <div style={{color:'white', marginLeft: "5px", textAlign: "left"}}> 
                    2) Ideas to engage the whole team in the process and increase safety 
                    </div>
                    <div style={{color:'white', marginLeft: "5px", textAlign: "left"}}> 
                    3) Resources and information to help you manage hazards.
                    </div>
                    <img alt="iPadGraphic" className="iPadGraphic" src={Graphic} />
                </Grid>

                <Grid item xs={6}>
                    <div className="loginForm">
                        <form style={{ borderRadius: '50px', padding: '30px' }}>

                            <pre className="IntroHeading">Nau Mai       Welcome!</pre>

                            <div>
                                <input className="form-control" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} type="email" onChange={handleChange('email')} defaultValue={values.email} placeholder="Enter email" />
                            </div>

                            <div>
                                <input className="form-control" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} type="password" placeholder="Enter password" />
                            </div>

                            {/* <div className="form-group">
                                <div>
                                    <input className="form-control" type="checkbox" id="customCheck1" />
                                    <label style={{ color: "black" }} htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div> */}

                            <input className='buttonStyle' type='button' value="Login" onClick={this.continue} />

                            <p style={{ padding: '10px', fontSize: '15px' }}>

                                Forgot <a href="#">password?</a>
                            </p>

                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
} 

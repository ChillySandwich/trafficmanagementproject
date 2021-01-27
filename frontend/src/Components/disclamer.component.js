import React, { Component } from "react";
import {Link } from 'react-router-dom';
//import * as Mui from '@material-ui/core';
export default class Login extends Component {
    render() {
        return (
            <div>
<h3>Disclaimer</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<Link to = "/Disclamer"> <button type="submit" className="btn btn-dark btn-lg btn-block">Agree</button> </Link>
</div>
            );
        }
    }
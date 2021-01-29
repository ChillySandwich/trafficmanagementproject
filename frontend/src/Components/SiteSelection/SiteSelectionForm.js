import React, { Component } from "react";


export default class Login extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <form>

            <h3>Fill Out Your Site Details Here.</h3>

            <div className="form-group">
                <label>Enter Industry</label>
                <input type="email" className="form-control" placeholder="Enter Industry" />
            </div>

            <div className="form-group">
                <label>Enter Address</label>
                <input type="email" className="form-control" placeholder="Enter Address" />
            </div>

            <div className="form-group">
                <label>Enter Square Meters</label>
                <input type="email" className="form-control" placeholder="Enter Sqm" />
            </div>

            <div className="form-group">
                <label>Enter Warehouse</label>
                <input type="email" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block"> Submit </button>

            </form>
        );
    }
}
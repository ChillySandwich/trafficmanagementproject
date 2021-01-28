import React, { Component } from 'react';
import Login from './login.component';


export default class MasterForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        industry: '',
    }

    //next step
    nextStep = () => {
        const {step} = this.state;
        this.setState ({
            step: step+1
        })
    }

    //previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step - 1
        })
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});

    }

  render() { 
      const { step } = this.state;
      const { firstName, lastName, email, industry } = this.state;
      const values = { firstName, lastName, email, industry };

      switch(step) {
          case 1: 
            return (
                <Login
                nextStep = {this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 2:
                return <h1>
                    Intro Page
                </h1>
            case 3:
                return <h1>Select Site</h1>
      }
    return (
      <React.Fragment>
      
      </React.Fragment>
    )
  }
}

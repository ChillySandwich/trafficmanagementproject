import { createGenerateClassName } from '@material-ui/core';
import React, { Component } from 'react';
import Login from './Login/login.component';
import SiteSelection from './SiteSelection/SiteSelection';
import  SiteUpload  from './SiteMapUpload/upload.component';
import Disclaimer from './Disclaimer/disclaimer.component';
import Layout from './HazardAllocation/Layout';


export class MultiStepHandler extends Component {
    // Put some empty fields in here to hold data when it needs to be changed e.g. industry: ''. will need to do this for anything we want in the final 'pdf' 
    state = {
        step: 1,
        industry: '',
        siteaddress: '',
        sqmSiteSize: '',
        warehouse: '',

    }
    //put step value forward once, for submit buttons
    nextStep = () => {
        const {step } = this.state;
        this.setState({
           step: step + 1 
        })
    }
      //put step value back once, for previous page buttons
    prevStep = () => {
         const {step } = this.state;
         this.setState({
            step: step - 1 
          })
        }
        handleChange = input => e => {
            this.setState({[input]: e.target.value})
        }
        render() {
            
            const {step} = this.state;
            const {userName, password} = this.state;
            const values = {}
// Switch case for displaying each page, pass in current state of step as parameter to choose current case
           switch(step) {
               //Login page
               case 1:
                   return (
                       <Login
                       nextStep = {this.nextStep}
                       handleChange={this.handleChange}
                       values = {values}  

                      />
                   )
                    case 2:
                        return (
                            <Disclaimer
                            nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                         values = {values}
                            
                            />
                        )

                      //Site Selection 
                   
                   case 3:
                       return (
                       <SiteSelection
                       nextStep = {this.nextStep}
                       prevStep = {this.prevStep}
                       handleChange = {this.handleChange}
                       values = {values}
                    />
                       )
                        // e.g. hazard select. import the component that is needed and then return that component below.
                    case 4:
                        return (
                            <SiteUpload
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange={this.handleChange}
                            values = {values}
                            />
                        )
                        //Continue making cases for as many pages as we need.
                    case 5:
                        return (
                            <Layout
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange={this.handleChange}
                            values = {values}
                            />
                        )
           
           }       
           
            
    }
}
export default MultiStepHandler
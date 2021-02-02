import { createGenerateClassName } from '@material-ui/core';
import React, { Component } from 'react';
import Login from './Login/login.component';
import SiteSelection from './SiteSelection/SiteSelection';
import  SiteUpload  from './FileUploadFinal/Imageloader';
import Disclaimer from './Disclaimer/disclaimer.component';
import HazardPage from './HazardSelect/HazardPage';
import HazardDrop from './HazardDrop/index';
import Logo from './logo.png';
import './App.css';
import './FileUploadFinal/Imageloader.css';

export class MultiStepHandler extends Component {
    // Put some empty fields in here to hold data when it needs to be changed e.g. industry: ''. will need to do this for anything we want in the final 'pdf' 
    state = {
        step: 1,
        checkBox: false,
        email: '',
        industry: '',
        siteaddress: '',
        sqmSite: '',
        warehouse: '',
        disclaimer: false,
        siteImageUplodaded: false,
        hazardDropCompleted: false,
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
            const {email, industry, siteaddress, sqmSiteSize, warehouse, disclaimer, siteImageUplodaded, hazardSelect, hazardDropCompleted} = this.state;
            const values = {email, industry, siteaddress, sqmSiteSize, warehouse, disclaimer, siteImageUplodaded, hazardSelect, hazardDropCompleted}
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
                        <HazardPage
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        values = {values}
                        />
                    )
                    //Hazard Drop
                    case 6:
                    return (
                        <HazardDrop
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        values = {values}
                        />
                    )
           
            }       
           
            
    }
}
export default MultiStepHandler
import { createGenerateClassName } from '@material-ui/core';
import React, { Component } from 'react';
import Login from './Login/login.component';
import SiteSelectionForm from './SiteSelection/SiteSelectionForm';
import SiteSelectionMap from './SiteSelection/SiteSelectionMap';
import SiteUpload from './FileUploadFinal/Imageloader';
import Disclaimer from './Disclaimer/disclaimer.component';
import HazardPage from './HazardSelect/HazardPage';
import HazardDrop from './HazardAllocation/Layout';
import Logo from './logo.png';
import './App.css';
import './FileUploadFinal/Imageloader.css';
import SiteDrawingLayout from './SiteInflowOutflow/SiteDrawingLayout';
import PDF from './PDFDownloadPage/pdf';
import Grid from "@material-ui/core/Grid";

export class MultiStepHandler extends Component {
    // Put some empty fields in here to hold data when it needs to be changed e.g. industry: ''. will need to do this for anything we want in the final 'pdf' 


    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            checkBox: false,
            email: '',
            industry: '',
            siteaddress: '',
            sqmSite: '',
            warehouse: '',
            imageState: '',
            selectedHaz: [],
            disclaimer: false,
            siteImageUplodaded: false,
            hazardDropCompleted: false,
        }
    }
    //put step value forward once, for submit buttons
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    //put step value back once, for previous page buttons
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    render() {

        const { step } = this.state;
        const { email, industry, siteaddress, sqmSiteSize, warehouse, disclaimer, siteImageUplodaded, hazardSelect, hazardDropCompleted, selectedHaz } = this.state;
        const values = { email, industry, siteaddress, sqmSiteSize, warehouse, disclaimer, siteImageUplodaded, hazardSelect, hazardDropCompleted, selectedHaz }
        // Switch case for displaying each page, pass in current state of step as parameter to choose current case
        switch (step) {
            //Login page
            case 1:
                return (
                    <Login
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                )
            case 2:
                return (
                    <Disclaimer
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                )

            //Site Selection 

            case 3:

                return (
                    <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <SiteSelectionForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <SiteSelectionMap
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={values}   
                    />       
                    </Grid>
                    </Grid>
                )
            // e.g. hazard select. import the component that is needed and then return that component below.
            case 4:
                return (
                    <SiteUpload
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 5:
                return (
                    <HazardPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            //Hazard Drop
            case 6:
                return (
                    <HazardDrop
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        showHaz={this.hazardList}
                    // data={{ showHaz: this.state.selectedHaz }}
                    />
                )
            case 7:
                return (

                    <SiteDrawingLayout
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        showHaz={this.hazardList}
                    />
                )

            case 8:
                return (
                    <PDF
                        values={values}
                        handleChange={this.handleChange}
                        prevStep={this.prevStep}
                        email={this.state.email}
                        industry={this.state.industry}
                        siteaddress={this.state.siteaddress}
                        sqmSite={this.state.sqmSite}
                        warehouse={this.state.warehouse}
                    />
                )
        }


    }
}
export default MultiStepHandler
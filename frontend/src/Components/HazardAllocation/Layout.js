import React from 'react';
import SideContainer from"./SideContainer";
import ImageContainer from"./ImageContainer";
import Hazard from "./Hazard";
import Hazards from "./Hazards";
import Grid from "@material-ui/core/Grid";

  
export default class Layout extends React.Component{
    //'Continue' event handler, calls the nextStep method from MultiStepHandler to go forward a page
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
}
//'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value})
}
    render(){
        const { values, handleChange } = this.props;
        return(

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SideContainer>
                    <Hazards />
                    </SideContainer>
                    <input type='button' className= 'buttonStyle' value="Back" onClick={this.back}/>
                    <input type='button' className= 'buttonStyle' value="Continue" onClick={this.continue}/> 
                </Grid>
                <Grid item xs={6}>
                    <ImageContainer />
                </Grid>
                {/* <input type='button' value="Selected Hazards" onClick={() => console.log(this.props.data.showHaz)}/> */}
            </Grid>
        );
    }
}

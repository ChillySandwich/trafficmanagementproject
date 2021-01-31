import React, {Component}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SiteSelectionForm from '../SiteSelection/SiteSelectionForm';
import SiteSelectionMap from '../SiteSelection/SiteSelectionMap';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
//Main SiteSelection class, which inserts sub-components; SiteSelectionForm and SiteSelectionMap
export class SiteSelection extends Component {
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
        render() {
          const { values, handleChange } = this.props;
        return ( 
        <div>
           <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Site Selection Page</h1>
        </Grid>
        <Grid item xs={6}>
          <div><SiteSelectionForm/></div>
        </Grid>
        <Grid item xs={6}>
          <div><SiteSelectionMap/></div>
        </Grid>
        <input type='button' value="submit" onClick={this.continue}/> 
        <input type='button' value="previous page" onClick={this.back}/>
      </Grid>
      </div>
       );
    
}} export default SiteSelection
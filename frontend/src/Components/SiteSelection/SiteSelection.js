import React, {Component}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SiteSelectionForm from '../SiteSelection/SiteSelectionForm';
import SiteSelectionMap from '../SiteSelection/SiteSelectionMap';
import {Link } from 'react-router-dom';
import MultiStepHandler from '../MultiStepHandler';
import { Map, GoogleApiWrapper } from 'google-maps-react';
/* global google */
let markerArray = [];

    
 const style = {
    maxWidth: "600px",
    height: "400px",
    overflowX: "hidden",
    overflowY: "hidden"
   };
   const containerStyle = {
    maxWidth: "600px",
    height: "400px"
   };

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

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  
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

        render() {
          const { values, handleChange } = this.props;
        return ( 
        <div>
           <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Select Site | Pae Whiriwhiri</h1>
        </Grid>
        <Grid item xs={6}>
          <form>
<h4>Site Details | Taipitopito Pae</h4>

<div className="form-group">
    <input type="text" className="form-control" style={{color:'black'}} onChange={handleChange('industry')} defaultValue={values.industry} placeholder="Enter Industry" />
</div>

<div className="form-group">
<input ref={this.autocompleteInput} className="form-control" style={{color:'black'}}  id="autocomplete" onChange={handleChange('siteaddress')} defaultValue={values.siteaddress} placeholder="Enter your Address"
type="text"></input>
</div>

<div className="form-group">
    <input type="text" className="form-control" style={{color:'black'}}  placeholder="Enter Sqm" />
</div>

<div className="form-group">
    <input type="text" className="form-control"  style={{color:'black'}}  placeholder="Enter Warehouse" />
</div>

</form>
        </Grid>
        <Grid item xs={6}>
        <div>
            <Map
        google={this.props.google}
        style={style}
        containerStyle={containerStyle}
        initialCenter={
          {
            lat: -41.313489,
            lng: 175.193434
          }
        }
      />
      </div>
        </Grid>
        <input className= 'buttonStyle' type='button' value="Back" onClick={this.back}/>
        <input className= 'buttonStyle'type='button' value="Submit" onClick={this.continue}/>
      </Grid>
      </div>
       );
    
}} export default GoogleApiWrapper({
    apiKey: 'AIzaSyBojPgUo6oL-v-WuwF62T2AGR-KrxVQgvE'
  })(SiteSelection);

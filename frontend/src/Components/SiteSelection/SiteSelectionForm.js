import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* global google */
 
export class SiteSelectionForm extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
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
 
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});
 
    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }
 
 
    render() {
      const { values, handleChange } = this.props;
        return (
            <form>
              <br></br>
            <h1 >Fill Out Your Site Details Here</h1>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Industry" onChange={handleChange('industry')} defaultValue={values.industry} />
            </div>
 
            <div className="form-group">
            <input ref={this.autocompleteInput} className="form-control" id="autocomplete" placeholder="Enter your Address"
         type="text" onChange={handleChange('siteaddress')} defaultValue={values.siteaddress}></input>
            </div>
 
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Sqm" onChange={handleChange('sqmSite')} defaultValue={values.sqmSite} />
            </div>
 
            <input type='button'className= 'buttonStyle'  value="Back" onClick={this.back} />
              <input type='button'className= 'buttonStyle' value="Continue" onClick={this.continue} />
            </form>
        
          
        );
    }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBojPgUo6oL-v-WuwF62T2AGR-KrxVQgvE'
})(SiteSelectionForm);
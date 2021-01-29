import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
/* global google */

export class SiteSelectionForm extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
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
            <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your address"
         type="text"></input>
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
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBojPgUo6oL-v-WuwF62T2AGR-KrxVQgvE'
})(SiteSelectionForm);

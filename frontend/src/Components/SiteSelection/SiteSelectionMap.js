import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class SiteSelectionMap extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div>
            <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
      </div>
            
        );  
}
}
export default GoogleApiWrapper({
    apiKey: <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaQDZFxQVzqRsfVUsQiE6kX-v2eQMAqNEcallback=initMap"
    type="text/javascript"></script>
  })(SiteSelectionMap);
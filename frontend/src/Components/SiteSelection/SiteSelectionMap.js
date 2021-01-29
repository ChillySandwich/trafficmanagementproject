import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
/* global google */
    
 const style = {
    maxWidth: "600px",
    height: "600px",
    overflowX: "hidden",
    overflowY: "hidden"
   };
   const containerStyle = {
    maxWidth: "600px",
    height: "600px"
   };

   export class SiteSelectionMap extends Component {
       
    render() {
        return (
            <div>
            <Map
        google={this.props.google}
        style={style}
        containerStyle={containerStyle}
        initialCenter={
          {
            lat: 41,
            lng: 174
          }
        }
      />
      </div>
            
        );  
}
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBojPgUo6oL-v-WuwF62T2AGR-KrxVQgvE'
  })(SiteSelectionMap);
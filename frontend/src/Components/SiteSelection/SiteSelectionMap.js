import React, { Component } from "react";
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
            lat: -41.313489,
            lng: 175.193434
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
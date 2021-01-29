import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

    
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
    apiKey: 'AIzaSyCaQDZFxQVzqRsfVUsQiE6kX-v2eQMAqNE'
  })(SiteSelectionMap);
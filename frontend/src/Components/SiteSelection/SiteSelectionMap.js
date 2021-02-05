import React, { createRef, Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { useScreenshot } from 'use-react-screenshot';
/* global google */
let markerArray = [];


 
   const SiteSelectionMap = (props) => {
    const ref = createRef(null)
//   const [image, takeScreenshot] = useScreenshot()
//   const getImage = () => takeScreenshot(ref.current)
//       //'Continue' event handler, calls the nextStep method from MultiStepHandler to go forward a page
//       const continuee = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     }
    //'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
     const back = e => {
        e.preventDefault();
        this.props.prevStep();
      }
        return (
          <div>  
          <div>
        </div>
        {/* <img width={600} src={image} alt={'Screenshot'} /> */}
        <div ref={ref}>
        <iframe src="https://snazzymaps.com/embed/289197" title = "map" width="100%" height="600px"></iframe> 
        </div>
        {/* <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button> */}
        </div>
        );
      }
export default SiteSelectionMap;
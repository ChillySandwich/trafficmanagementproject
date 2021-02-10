import React, { useState } from "react";
/* global google */
let markerArray = [];

   const SiteSelectionMap = () => {
        return (
          <div>   
          <div>
            <h2>Dont have a site plan? Save a screenshot of one on our satellite map. Press the Windows Key(⊞) and Print screen (prt sc) to take the shot.</h2>
        </div>
        <iframe src="https://snazzymaps.com/embed/289197" title = "map" width="100%" height="600px" allow="fullscreen"></iframe> 
        </div>
        );
      }
export default SiteSelectionMap;

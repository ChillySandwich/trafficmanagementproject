import React, { useState } from "react";
import { Grid, Button } from '@material-ui/core';

/* global google */
let markerArray = [];

   const SiteSelectionMap = () => {
    const [buttonTextMac, setButtonTextMac] = useState("For Mac"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    const [buttonTextWindows, setButtonTextWindows] = useState("For Windows");

        return (
          <div> 
             <br></br> 
            <h2> Screenshot a Site Map</h2>  
            <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
        <button className="helpButtons" value="For Mac" onClick={() => setButtonTextWindows("Windows Key + Prt Sc")}>{buttonTextWindows}</button>
        </Grid>
                        <Grid item xs={6}>
                        <button className="helpButtons" color="white" value="For Mac" onClick={() => setButtonTextMac("Shift + Command + 3")}>{buttonTextMac}</button>
        </Grid>
              </Grid>       
        <iframe style={{padding: "15px", backgroundColor: "white", borderRadius: "10px", border: "none"}} src="https://snazzymaps.com/embed/289197" title = "map" width="90%" height="600px" allow="fullscreen"></iframe> 
       <div>
        </div>
        </div>
        );
      }
export default SiteSelectionMap;

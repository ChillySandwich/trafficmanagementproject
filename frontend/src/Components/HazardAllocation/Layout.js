import React from 'react';
import SideContainer from"./SideContainer";
import ImageContainer from"./ImageContainer";
import Hazard from "./Hazard";
import Hazards from "./Hazards";
import Grid from "@material-ui/core/Grid";

  
export default class Layout extends React.Component{
    render(){
        return(

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SideContainer>
                    <Hazards />
                    </SideContainer>
                </Grid>
                <Grid item xs={6}>
                    <ImageContainer />
                </Grid>
                <input type='button' value="Selected Hazards" onClick={() => console.log(this.props.data.showHaz)}/>
            </Grid>
        );
    }
}
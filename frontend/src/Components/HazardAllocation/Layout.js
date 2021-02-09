import React from 'react';
import SideContainer from "./SideContainer";
import ImageContainer from "./ImageContainer";
import Hazard from "./Hazard";
import Hazards from "./Hazards";
import Grid from "@material-ui/core/Grid";
import Canvas from "./Canvas";
import "./Layout.css"


export default class Layout extends React.Component {
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
        this.setState({ [input]: e.target.value })
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <div id="fragment">

                    {/* <Canvas /> */}

                    <div id="canvas">
                        <Canvas />
                        {/* <input type='button' value="Selected Hazards" onClick={() => console.log(this.props.data.showHaz)}/> */}
                    </div>

                    <div id="sidebar">
                        {/* <Hazards /> */}

                        <div style={{fontWeight: 'bold', fontSize: '30px', textAlign: 'left', margin: '8px', color: 'white'}}> Key</div>
                        <div id="flex-item">
                            <span className="text">Forklift</span>
                        </div>
                        <div id="flex-item">
                             <span className="text">Truck</span>
                        </div>
                        <div id="flex-item">
                            <span className="text">Cone</span>
                        </div>
                        <div id="flex-item">
                            <span className="text">Robot Arm</span>
                        </div>
                        <div id="flex-item">
                            <span className="text">Chemical Barrel</span>
                        </div>

                        <input style={{marginTop:"50px", float: 'left'}} type='button' className='buttonStyle' value="Save and Continue" onClick={this.continue} />

                    </div>

                    {/* <div > */}
                        {/* <input type='button' className='buttonStyle' value="Back" onClick={this.back} /> */}
                    {/* </div> */}
                </div>
            </>

        );
    }
}

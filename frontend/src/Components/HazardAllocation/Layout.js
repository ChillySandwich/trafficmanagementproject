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

                    <div id="sidebar">
                        {/* <Hazards /> */}
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                        <div id="flex-item">
                            <span className="image">test</span> <span className="text"></span>
                        </div>
                    </div>

                    <div id="canvas">
                        <Canvas />
                        {/* <input type='button' value="Selected Hazards" onClick={() => console.log(this.props.data.showHaz)}/> */}
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <input type='button' className='buttonStyle' value="Save and Continue" onClick={this.continue} />
                        {/* <input type='button' className='buttonStyle' value="Back" onClick={this.back} /> */}
                    </div>
                </div>
            </>

        );
    }
}

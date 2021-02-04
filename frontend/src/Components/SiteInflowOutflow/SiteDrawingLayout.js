import SiteImg from '../HazardAllocation/Site.JPG';
import React, { useRef, useEffect, useState } from 'react'
import Canvas from './Canvas';
import ToolBar from './ToolBar'


function SiteDrawingLayout(props) {

    const [colour, setColour] = useState("red");
    const [size, setSize] = useState(5);

    //'Continue' event handler, calls the nextStep method from MultiStepHandler to go forward a page
    const continuee = e => {
        e.preventDefault();
        props.nextStep();
    }
    //'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    function toggleColour() {
        if (colour === "red") {
            setColour("green")
        } else {
            setColour("red")
        }
    }

    function increase() {
        setSize(prev => prev + 1)
    }

    function decrease() {
        if (size === 1) {
            return
        }
        setSize(prev => prev - 1)
    }

    return (
        <div className="site-draw-container">
            <Canvas colour={colour} size={size} />
            <ToolBar toggleColour={toggleColour} decrease={decrease} increase={increase} />

            <input className='buttonStyle' type='button' value="Back" onClick={back} />
            <input className='buttonStyle' type='button' value="Submit" onClick={continuee} />
        </div>
    );
}

export default SiteDrawingLayout;
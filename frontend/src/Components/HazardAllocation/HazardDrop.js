import React from 'react';
import Canvas from "./Canvas";
import "./Layout.css"


export default class HazardDrop extends React.Component {
    constructor(props){
        super(props);
    }
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

    setdndImg = e => {
        e.preventDefault();
        this.props.setdndImg();
    }


    
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
            <br></br>
                <div id="fragment">

                    {/* <Canvas /> */}

                    <div id="canvas">
                        <Canvas 
                         setdndImg={this.props.setdndImg}/>
                        {/* <input type='button' value="Selected Hazards" onClick={() => console.log(this.props.data.showHaz)}/> */}
                    </div>

                    <div id="sidebar">
                        {/* <Hazards /> */}

                        <div style={{fontWeight: 'bold', fontSize: '30px', textAlign: 'left', margin: '8px', color: 'white'}}> Key: Drag + Drop</div>
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

                        <br></br>
                        <br></br>
                        

                        <div id="flex-item">
                            <input type='button' className='buttonStyle' value="Back" onClick={this.back} />
                            <input type='button' className='buttonStyle' value="Continue" onClick={this.continue} />
                        </div>  


                    </div>

                </div>
            </>

        );
    }
}

import React from 'react';
import Board from './Board';
//import './style.css';
import '../App.css';


class DrawContainer extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            currentColour: "green",
            inflow: "green",
            outflow: "red",
            pedestrian: "orange",
            isToggleOn: false          
        };

        // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      //'Continue' event handler, calls the nextStep method from MultiStepHandler to go forward a page
  continuee = e => {
    e.preventDefault();
    this.props.nextStep();
}
//'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

    

    render() {

        return (
            <div className="draw-container">
                <Board uploadedImage={this.props.uploadedImage} setImg = {this.props.setImg} passedImage={this.props.passedImage} colour={this.state.isToggleOn ? 'ON' : 'OFF'}></Board>
                <input type='button' className= 'buttonStyle' value="Back" onClick={this.back}/>
                <input type='button' className= 'buttonStyle' value="Continue" onClick={this.continuee}/>
            </div>
        )
    }
}

export default DrawContainer;

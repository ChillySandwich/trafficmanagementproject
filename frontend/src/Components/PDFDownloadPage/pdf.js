import React from 'react';
import Pdf from "react-to-pdf";
 
const ref = React.createRef();
 
const pdf = (props) => {
 
    //'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
    const back = e => {
        e.preventDefault();
        props.prevStep();
    }
 
    return (
        <>
        <div style={{textAlign: 'left'}} className = "MultiStepHandler" ref = {ref}>
            <h1 style={{color: "black"}}> A review of your Traffic Management Plan</h1>
            <br></br>
<h2> Email: {props.email} </h2>
<h2> Industry: {props.industry}</h2>
<h2> Site Address: {props.siteaddress}</h2>
<h2> Site Size(Sqm): {props.sqmSite}</h2>
<h2> Warehouse: {props.warehouse}</h2>
        </div>
        <Pdf targetRef={ref} filename="Traffic-management-plan.pdf">
            {({ toPdf}) => <button onClick={toPdf}> Download TMP </button>}
        </Pdf>
        <input type='button' className= 'buttonStyle' value="Back" onClick={back} />
        </>
    );
} 

export default pdf;
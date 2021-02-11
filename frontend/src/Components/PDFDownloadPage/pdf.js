import React from 'react';
import jsPDF from "jspdf";

const ref = React.createRef();


const pdf = (props) => {

    //'back' event handler, calls the prevStep method from MultiStepHandler to go back a page
    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    var jsPdfGenerator = () => {
        try {
        var doc = new jsPDF ('p', 'pt');

        doc.text(20, 20, "Email: " + props.email);
        doc.text(20, 40, "Industry: " + props.industry);
        doc.text(20,60, "Site Address: " + props.siteaddress);
        doc.text(20, 80, "Site Size (Square meters): " + props.sqmSite);
        var img = new Image()
        img.src = props.uploadedImage;
        doc.addImage(img, 'png', 20, 100, 450, 300)
        var img2 = new Image()
        img2.src = props.dndImg;
        doc.addImage(img2, 'png', 20, 500, 450, 300)
        doc.save("traffic-management-plan.pdf");
        } catch {
            console.log("no images uploaded")
        }
    }

    return (
        <>
            <br></br>
            <div style={{ textAlign: 'left' }} className="MultiStepHandler" ref={ref}>
                <h1 >A review of your Traffic Management Plan</h1>
                <br></br>
                <h2> Email: {props.email} </h2>
                <h2> Industry: {props.industry}</h2>
                <h2> Site Address: {props.siteaddress}</h2>
                <h2> Site Size(Sqm): {props.sqmSite}</h2>
                <h2> Warehouse: {props.warehouse}</h2>
                <h2> Site Image: </h2>
                <img alt="" src={props.uploadedImage} width="60%" height = "500px"/>
                <img alt="" src = {props.dndImg}></img>
            </div>

            <input type='button' className='buttonStyle' value="Back" onClick={back} />
            <input type='button' className='buttonStyle' value="Generate PDF" onClick={jsPdfGenerator} />
            {/* <button className='buttonStyle generateBtn' onClick={jsPdfGenerator}> Generate PDF </button> */}
        </>
    );
}

export default pdf;



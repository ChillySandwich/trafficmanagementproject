import React, { useState } from 'react';
import "./Imageloader.css";

const Imageloader = (props) => {

    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
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

    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    };
    return (
        <div className="Imageloader">
            <div className="container">
                <h1>Upload your Site View | Tukuatu Tirohanga Pae</h1>
                {error && <p className="errorMsg">File not supported</p>}
                <div
                    className="imgPreview"
                    style={{
                        background: imgPreview
                            ? `url("${imgPreview}") no-repeat center/cover`
                            : "#131313"
                    }}
                >
                    {!imgPreview && (
                        <>
                            <p>Add an image</p>
                            <label htmlFor="fileUpload" className="customFileUpload">
                                Choose file
</label>
                            <input type="file" id="fileUpload" onChange={handleImageChange} />
                            <span>(jpg, jpeg or png)</span>
                        </>
                    )}
                </div>
                {imgPreview && (
                    <button onClick={() => setImgPreview(null)}>Remove image</button>
                )}
            </div>
            <input type='button'className= 'buttonStyle'  value="Back" onClick={back} />
            <input type='button'className= 'buttonStyle' value="Continue" onClick={continuee} />
        </div>
    );
};
export default Imageloader;

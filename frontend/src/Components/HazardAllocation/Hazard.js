import React from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import {useState} from 'react';

//array of the actual value of the state, and function to update the value



export const Hazard = ({ hazard, onDelete }) => {
    const [show, setShow] = useState(false);
    
    return (
        
        <div>
            <div> {hazard.text}  </div>
            <Draggable grid={[15, 15]}>
            <div> {hazard.image}
            <FaTimes style = {{color: 'red', cursor: 'pointer', height:'10px', width:'10px'}}  onClick={() => onDelete(hazard.id)}/>          </div>
            </Draggable>
           
        </div>
    );
}

export default Hazard;


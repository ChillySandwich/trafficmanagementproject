import {FaTimes, FaQuestion} from 'react-icons/fa';
import { useState } from 'react';

const HazardSelected = ({hazard, clickHazardSelected, img}) => {
    const [moreInfo, setMoreInfo] = useState(false);

    return (
        <div className = 'hazard'>
            {moreInfo ? <p>{hazard.info}</p>: <img src={hazard.img} alt=""/>}
            {/* <img src={hazard.img} alt=""/> */}
            <FaTimes className="removeIcon" onClick={() => clickHazardSelected(hazard.id)}/>
            <FaQuestion className="questionIcon" onClick={() => setMoreInfo(!moreInfo)}/>
            <h3>{hazard.name} </h3>
            
        </div>
    )
}

export default HazardSelected
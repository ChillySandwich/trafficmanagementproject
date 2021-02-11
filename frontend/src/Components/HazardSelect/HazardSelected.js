import {FaTimes} from 'react-icons/fa';

const HazardSelected = ({hazard, clickHazardSelected, img}) => {
    return (
        <div className = 'hazard'>
            <img src={hazard.img} alt=""/>
            <FaTimes className="removeIcon" onClick={() => clickHazardSelected(hazard.id)}/>
            <h3>{hazard.name} </h3>
            
        </div>
    )
}

export default HazardSelected
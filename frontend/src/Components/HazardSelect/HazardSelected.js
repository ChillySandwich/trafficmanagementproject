import {FaTimes} from 'react-icons/fa';

const HazardSelected = ({hazard, clickHazardSelected, img}) => {
    return (
        <div className = 'hazard'>
            <h3>{hazard.name} <FaTimes className="removeIcon" onClick={() => clickHazardSelected(hazard.id)}/></h3>
            <img src={hazard.img} alt=""/>
        </div>
    )
}

export default HazardSelected
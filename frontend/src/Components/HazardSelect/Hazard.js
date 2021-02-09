import {FaPlus} from 'react-icons/fa';

const Hazard = ({hazard, clickHazard, img}) => {
    return (
        <div className = 'hazard'>
            <h3>{hazard.name} <FaPlus className="addIcon" onClick={() => clickHazard(hazard.id)}/></h3>
            <img src={hazard.img} alt=""/>
            
        </div>
    )
}

export default Hazard
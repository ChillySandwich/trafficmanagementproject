import {FaTimes} from 'react-icons/fa';

const HazardSelected = ({hazard, clickHazardSelected, img}) => {
    return (
        <div className = 'hazard'>
            <h3>{hazard.name} <FaTimes onClick={() => clickHazardSelected(hazard.id)} style={{color:"red"}}/></h3>
            <img src={hazard.img} alt=""/>
        </div>
    )
}

export default HazardSelected
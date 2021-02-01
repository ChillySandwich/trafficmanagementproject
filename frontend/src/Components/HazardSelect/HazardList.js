import Hazard from './Hazard';

const HazardList = ({hazards, clickHazard}) => {
    
    return (
        <div>
            
            {hazards.map((hazard) => (
            <Hazard key={hazard.id} hazard={hazard} clickHazard={clickHazard}/>
            ))}
            
        </div>
    )

}

export default HazardList
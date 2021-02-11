import HazardSelected from "./HazardSelected";


const HazardListSelected = ({hazards, clickHazardSelected}) => {
    return (
        <div className="hazardListSelected">
            {hazards.map((hazard) => (
            <HazardSelected key={hazard.id} hazard={hazard} clickHazardSelected={clickHazardSelected}/>
            ))}
        </div>
    )
}

export default HazardListSelected;
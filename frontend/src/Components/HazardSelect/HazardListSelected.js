import HazardSelected from "./HazardSelected";

const HazardListSelected = ({hazards, clickHazardSelected}) => {
    return (
        <div>
            {hazards.map((hazard) => (
            <HazardSelected key={hazard.id} hazard={hazard} clickHazardSelected={clickHazardSelected}/>
            ))}
        </div>
    )
}

export default HazardListSelected;
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HazardList from './HazardList';
import HazardListSelected from "./HazardListSelected";
import { useState } from 'react';

function HazardPage(props) {

    const [hazards, setHazards] = useState([
        {
            id: 1,
            name: "Forklift",
            description: "Heavy vehicle, not to be trifled with",
            selected: false,
            img: "https://www.xilin.com/wp-content/uploads/2013/08/FB20R.jpg"
        },
        {
            id: 2,
            name: "Racking",
            description: "Heavy storage, may collapse if hit",
            selected: false,
            img: "https://novalok.co.nz/wp-content/uploads/protection-On-site-racking-2.jpg"
        },
        {
            id: 3,
            name: "Truck",
            description: "Even heavier vehicle, not to be trifled with",
            selected: false,
            img: "https://www.hireace.co.nz/site/hireacerental/images/Vehicles/Commercial/Tail-Lift-Furniture-truck-hire.jpg"
        }
    ])

    const [selHaz, setSelHaz] = useState([]) 

    const clickHazard = (id) => {
        console.log('Clicked!', id);
        const haz = hazards;
        
        setHazards(hazards.filter(hazard => hazard.id !== id))
        setSelHaz(prev => prev.concat(haz.filter(hazard => hazard.id === id)))
        
    }

    const clickHazardSelected = (id) => {
        console.log('Clicked!', id);
        const haz = hazards;
        
        setHazards(prev => prev.concat(selHaz.filter(hazard => hazard.id === id)))
        setSelHaz(prev => prev.filter((hazard => hazard.id !== id)))
    }

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

  //const { values, handleChange } = props;

  return (
    <div>
      <h1>Hazards | Morearea</h1>
      
      <div className="hazard-page-container">
          
          {/* <div>
            <DropdownButton id="dropdown-basic-button" title="Select Hazard">
                {hazards.map((hazard) => (<Dropdown.Item key={hazard.id}>{hazard.name}</Dropdown.Item>))}
            </DropdownButton>
        </div> */}
        <div>
            <h4>Select Hazard | Tohua te morearea</h4>
            <HazardList hazards={hazards} clickHazard={clickHazard}/>
        </div>

        <div>
            <h3>Your Hazards | Kōwhiri mōrearea</h3>
            <HazardListSelected hazards={selHaz} clickHazardSelected={clickHazardSelected} />
        </div>
        
        
    </div>

    <input type='button' value="submit" onClick={continuee}/> 
    <input type='button' value="previous page" onClick={back}/>
      
    </div>
  );
}

export default HazardPage;

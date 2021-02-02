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
            img: "https://www.xilin.com/wp-content/uploads/2013/08/FB20R.jpg",
            image: <img style={{height: '40px', width: '40px'}}img src="https://tinyurl.com/y3aef9kt" alt=""> </img>
        },
        {
            id: 2,
            name: "Racking",
            text: "Racking",
            description: "Heavy storage, may collapse if hit",
            selected: false,
            img: "https://novalok.co.nz/wp-content/uploads/protection-On-site-racking-2.jpg",
            image: <img style={{height: '40px', width: '60px'}}img src="https://tinyurl.com/y67vdnmu" alt=""></img>
        },
        {
            id: 3,
            name: "Truck",
            text: "Truck",
            description: "Even heavier vehicle, not to be trifled with",
            selected: false,
            img: "https://www.hireace.co.nz/site/hireacerental/images/Vehicles/Commercial/Tail-Lift-Furniture-truck-hire.jpg",
            image: <img style={{height: '40px', width: '50px'}} img src="https://tinyurl.com/y3rxt7hh" alt=""></img>
        }
        //,
        // {
        //     id:4,
        //     text: 'Traffic Cone',
        //     name: 'Traffic Cone',
        //     image: <img style={{height: '20px', width: '20px'}}src="https://tinyurl.com/y6a5xw69" alt=""></img>,
        // },
        // {
        //     id:5,
        //     text: 'Pedestrian Zone',
        //     name: 'Pedestrian Zone',
        //     image: <img style={{height: '40px', width: '40px'}} img src= 'https://tinyurl.com/y27hc3ut' alt=""></img>
            
        // }
    ])

    const [selHaz, setSelHaz] = useState([]);

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

    
    <input type='button' className= 'buttonStyle' value="Back" onClick={back}/>
    <input type='button' className= 'buttonStyle' value="Continue" onClick={continuee}/>
    {/* <input type='button' value="Selected Hazards" onClick={() => props.showHaz(selHaz)}/> */}
    </div>
  );
}

export default HazardPage;

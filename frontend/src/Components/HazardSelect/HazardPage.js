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
            description: "...",
            selected: false,
            img: "./Forklift.png",
            info: "Potential risk: High\n\n-Isolate\n-Minimise\n\nPossible Controls:\nSigns, PPE, Licensed Drivers",
            risk: "High",
            controls: "Signs, PPE, Licensed Drivers"
        },
        {
            id: 2,
            name: "Industrial Chemicals",
            description: "...",
            selected: false,
            img: "./Barrel.png",
            risk: "",
            controls: "",
            info: "Potential risk: High\n\n-Isolate\n-Minimise\n\nPossible Controls:\nSigns, PPE, Licensed Drivers",

        },
        {
            id: 3,
            name: "Truck",
            description: "...",
            selected: false,
            img: "./Truck.png",
            risk: "",
            controls: "",
            info: "Potential risk: High\n\n-Isolate\n-Minimise\n\nPossible Controls:\nSigns, PPE, Licensed Drivers",

        },
        {
            id: 4,
            name: "Machinery",
            description: "...",
            selected: false,
            img: "./Machinery.png",
            risk: "",
            controls: "",
            info: "Potential risk: High\n\n-Isolate\n-Minimise\n\nPossible Controls:\nSigns, PPE, Licensed Drivers",

        },
        {
            id: 5,
            name: "Site Visitor",
            description: "...",
            selected: false,
            img: "./Person.png",
            risk: "",
            controls: "",
            info: "Potential risk: High\n\n-Isolate\n-Minimise\n\nPossible Controls:\nSigns, PPE, Licensed Drivers",

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
        <br></br>
      <div className="hazard-page-container">
          
          {/* <div>
            <DropdownButton id="dropdown-basic-button" title="Select Hazard">
                {hazards.map((hazard) => (<Dropdown.Item key={hazard.id}>{hazard.name}</Dropdown.Item>))}
            </DropdownButton>
        </div> */}
        <div>
            
            <h1 className="pageTitle">Tukuake Nga Korero</h1>
            <h1 className="pageTitle">Upload your site information</h1>
            <div className="dropdown-buttons">
            <DropdownButton id="dropdown-basic-button-mobileplant" title="Mobile Plant">
                <Dropdown.Item onClick={() => clickHazard(3)} ><img className="dropdown-icon" alt="" src="./Truck.png"></img>Truck</Dropdown.Item>
                <Dropdown.Item onClick={() => clickHazard(1)} ><img className="dropdown-icon" alt="" src="./Forklift.png"></img>Forklift</Dropdown.Item>
            </DropdownButton>
            <DropdownButton  id="dropdown-basic-button-equipment" title="Equipment">
                <Dropdown.Item onClick={() => clickHazard(4)} ><img className="dropdown-icon" alt="" src="./Machinery.png"></img>Machine Arm</Dropdown.Item>

            </DropdownButton>
            <DropdownButton id="dropdown-basic-button-personell" title="Personell">
                <Dropdown.Item onClick={() => clickHazard(5)} ><img className="dropdown-icon" alt="" src="./Person.png"></img>Site Visitor</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button-chemical" title="Chemical Hazards">
                
                <Dropdown.Item onClick={() => clickHazard(2)} ><img className="dropdown-icon" alt="" src="./Barrel.png"></img>Industrial Chemicals</Dropdown.Item>
                
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button-other" title="Other">
                <Dropdown.Item >Other</Dropdown.Item>
            </DropdownButton>
            </div>

            {/* <HazardList hazards={hazards} clickHazard={clickHazard}/> */}
        </div>

        <div>
            <h2 className="pageSubtitle">Your selections:</h2>
            <p className="hazHelpText">Click "?" to learn more about a selected item</p>
            <HazardListSelected hazards={selHaz} clickHazardSelected={clickHazardSelected} />
        </div>
                
    </div>

    
    <input type='button' className= 'buttonStyle' value="Back" onClick={back}/>
    <input type='button' className= 'buttonStyle' value="Save & Continue" onClick={continuee}/>
    {/* <input type='button' value="Selected Hazards" onClick={() => props.showHaz(selHaz)}/> */}
    </div>
  );
}

export default HazardPage;

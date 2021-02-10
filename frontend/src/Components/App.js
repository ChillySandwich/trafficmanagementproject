import React from 'react';
import './App.css';
import logo from './logo.png';
import MultiStepHandler from './MultiStepHandler';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// App.css holds a basic grid-template layout which is a 2x3 grid, like the following:
// ' header header '
// ' main main '
// ' footer footer'
export default function App () {

  return (  <Router>

 <body>
 <div className="header">
   <h1 style={{color:'white', fontWeight: "bold", marginLeft: "55px", marginTop: "20px", marginBottom: '10px'}}>Site Mate</h1>
   <pre className="Subtitle"> Hoki ora mai     Come Home Safely</pre>
 </div>
 <div className="main"><MultiStepHandler/></div> 
 <div className="footer"></div>
 </body>
 <Switch>

          </Switch>

 </Router>
  );
}


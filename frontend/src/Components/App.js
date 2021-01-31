import React from 'react';
import './App.css';
import MultiStepHandler from './MultiStepHandler';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// App.css holds a basic grid-template layout which is a 2x3 grid, like the following:
// ' header header '
// ' main main '
// ' footer footer'
export default function App () {

  return (  <Router>

 <body>
 <div className="header">header</div>
 <div className="main"><MultiStepHandler/></div> 
 <div className="footer">footer</div>
 </body>
 <Switch>

          </Switch>

 </Router>
  );
}


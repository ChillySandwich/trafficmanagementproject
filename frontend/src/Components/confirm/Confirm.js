import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { email, industry, siteaddress, sqmSiteSize, warehouse, disclaimer, siteImageUplodaded, hazardSelect, hazardDropCompleted }
    } = this.props;
    return (

      <div>
        <h1> Confirm Your Traffic Management Plan</h1>
        <ul>
          <li>
            {email}
          </li>
          <li>
            {industry}
          </li>
          <li>
            {siteaddress}
          </li>
        </ul>
      </div>

    );
  }
}

export default Confirm;
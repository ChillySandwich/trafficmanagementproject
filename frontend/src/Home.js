import React from 'react';
 
export class Home extends React.Component{
    render(){
        return(
            <div className="container">
            <div>
                <button className="btn btn-success">Create Student</button>
                <button className="btn btn-success">View Student</button>
            </div>
            </div>
        );
    }
}
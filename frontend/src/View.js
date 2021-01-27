import React from 'react';
import Axios from 'axios';
 
export class View extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
    }
 
    //Call this on page load
    componentDidMount(){
        Axios.get('http://localhost:3002/get-all').then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
 
        });
    }
 
    
}
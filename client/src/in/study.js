import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from "react-router-dom"

import ReactDOM from "react-dom";
import './study.css';
import {NavBar_in} from '../component/AppBar_in';

class Study extends Component{
    render(){
		
        return (
        <div id = "study_container" >
			<div id = "study_text" style={{marginTop:"8%"}}>
				升學資訊
			</div>
					
			
		</div>
        )
    }
}

export default Study;

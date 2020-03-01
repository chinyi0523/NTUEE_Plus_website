import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from "react-router-dom"

import ReactDOM from "react-dom";
import './recruit.css';
import {NavBar_in} from '../component/AppBar_in';

class Recruit extends Component{
    render(){
		
        return (
        <div id = "recruit_container" >
			<div id = "recruit_text" style={{marginTop:"8%"}}>
				招募徵才
			</div>
					
			
		</div>
        )
    }
}

export default Recruit;

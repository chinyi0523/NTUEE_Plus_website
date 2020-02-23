import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from "react-router-dom"

import ReactDOM from "react-dom";
import './recruit_study.css';
import {NavBar_in} from '../component/AppBar_in';

class Recruit_study extends Component{
    render(){
		
        return (
        <div id = "recruit_study_container" >
			<div id = "recruit_study_text" style={{marginTop:"8%"}}>
				招募徵才<br/>
				升學資訊
			</div>
					
			
		</div>
        )
    }
}

export default Recruit_study;

import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './career.css';

class Career extends Component{
    render(){
		
        return (
        <div id = "career_container" >
			<div id = "career_text" style={{marginTop:"8%"}}>
                <Link to="/in/Career/pages/Recruitment" >Recruitment</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/in/Career/pages/Recommendation">Recommendation</Link>
			</div>
					
			
		</div>
        )
    }
}

export default Career;

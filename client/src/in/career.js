import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './career.css';
import Recruitment_image from '../images/Recruitment.png';
import Recommendation_image from '../images/Recommendation.png';

class Career extends Component{
    render(){
		
        return (
        <div id = "career_container" >
			<div id = "career_text" style={{marginTop:"8%"}}>
                <Link to="/in/Career/pages/Recruitment" ><img className="career_img" src= {Recruitment_image} alt="Recruitment"/></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/in/Career/pages/Recommendation"><img className="career_img" src= {Recommendation_image} alt="Recommendation"/></Link>
			</div>
					
			
		</div>
        )
    }
}

export default Career;

import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './career.css';
import Recruitment_image from '../images/Recruitment.png';
import Recommendation_image from '../images/Recommendation.png';

class Career extends Component{
    render(){
		
        return (
        <div className="mt-5" >
			<div className="container justify-content-around d-flex">
                <Link to="/in/Career/pages/Recruitment" ><img className="career_img img-fluid" src= {Recruitment_image} alt="Recruitment"/></Link>
                <Link to="/in/Career/pages/Recommendation"><img className="career_img img-fluid" src= {Recommendation_image} alt="Recommendation"/></Link>
			</div>
					
			
		</div>
        )
    }
}

export default Career;

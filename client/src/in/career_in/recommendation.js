import React, { Component } from 'react';
import './recommendation.css';
import {NavBar_in} from '../../component/AppBar_in';

class Recommendation extends Component{
    render(){
        return (
			<div id = "recommendation_container">
				<div id = "recommendation_titlepage" style={{marginTop:"8%"}} >
					Constructing Recommendation
				</div>
				<div id = "recommendation_text_background" >
					<div id = "recommendation_textpage">
						Constructing Recommendation
					</div>
				</div>
			</div>
        )
    }
}

export default Recommendation;

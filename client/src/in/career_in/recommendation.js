import React, { Component } from 'react';
import './recommendation.css';
import {NavBar_in} from '../../component/AppBar_in';

class Recommendation extends Component{
    render(){
        return (
		<div id = "recommendation_container">
			<a href=''>
				submmit
			</a>
			<div id = "recommendation_section">
				<div id = "recommendation_section_1" >
					<div id = "recommendation_title">
						title
					</div>
					<div id = "recommendation_subtitle">
						subtitle
					</div>
				</div>
				<div id = "recommendation_section_2" >
					<div id="recommendation_img">
						<img/>
					</div>
					<div id = "recommendation_text">
						<div id = "recommendation_info">
							專業：test
						</div>
						<div id = "recommendation_info">
							期望公司：test
						</div>
						<div id = "recommendation_info">
							簡介：test
						</div>
						<div id = "recommendation_info">
							聯絡：test
						</div>
					</div>
				</div>		
			</div>
			<div id = "recommendation_section" >
				<div id = "recommendation_section_1" >
					<div id = "recommendation_title">
						title
					</div>
					<div id = "recommendation_subtitle">
						subtitle
					</div>
				</div>
				<div id = "recommendation_section_2" >
					<div id="recommendation_img">
						<img/>
					</div>
					<div id = "recommendation_text">
						<div id = "recommendation_info">
							專業：
						</div>
						<div id = "recommendation_info">
							期望公司：
						</div>
						<div id = "recommendation_info">
							簡介：test
						</div>
						<div id = "recommendation_info">
							聯絡：
						</div>
					</div>
				</div>		
			</div>
			<div id = "recommendation_section" >
				<div id = "recommendation_section_1" >
					<div id = "recommendation_title">
						title
					</div>
					<div id = "recommendation_subtitle">
						subtitle
					</div>
				</div>
				<div id = "recommendation_section_2" >
					<div id="recommendation_img">
						<img/>
					</div>
					<div id = "recommendation_text">
						<div id = "recommendation_info">
							專業：
						</div>
						<div id = "recommendation_info">
							期望公司：
						</div>
						<div id = "recommendation_info">
							簡介：test
						</div>
						<div id = "recommendation_info">
							聯絡：
						</div>
					</div>
				</div>		
			</div>
		</div>
        )
    }
}

export default Recommendation;

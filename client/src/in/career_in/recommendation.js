import React, { Component } from 'react';
import './recommendation.css';
import {NavBar_in} from '../../component/AppBar_in';

class Recommendation extends Component{
    render(){
        return (
			<div id = "FindJob_container">
				<div id = "FindJob_section" style={{marginTop:"8%"}} >
					<div id = "FindJob_section_1" >
						<div id = "FindJob_title">
							title
						</div>
						<div id = "FindJob_subtitle">
							subtitle
						</div>
					</div>
					<div id = "FindJob_section_2" >
						<div id="FindJob_img">
							<img/>
						</div>
						<div id = "FindJob_text">
							<div id = "FindJob_info">
								職缺：test
							</div>
							<div id = "FindJob_info">
								簡介：test
							</div>
							<div id = "FindJob_info">
								聯絡：test
							</div>
						</div>
					</div>		
				</div>
				<div id = "FindJob_section" style={{marginTop:"3%"}} >
					<div id = "FindJob_section_1" >
						<div id = "FindJob_title">
							title
						</div>
						<div id = "FindJob_subtitle">
							subtitle
						</div>
					</div>
					<div id = "FindJob_section_2" >
						<div id="FindJob_img">
							<img/>
						</div>
						<div id = "FindJob_text">
							<div id = "FindJob_info">
								職缺：
							</div>
							<div id = "FindJob_info">
								簡介：
							</div>
							<div id = "FindJob_info">
								聯絡：
							</div>
						</div>
					</div>		
				</div>
				<div id = "FindJob_section" style={{marginTop:"3%"}} >
					<div id = "FindJob_section_1" >
						<div id = "FindJob_title">
							title
						</div>
						<div id = "FindJob_subtitle">
							subtitle
						</div>
					</div>
					<div id = "FindJob_section_2" >
						<div id="FindJob_img">
							<img/>
						</div>
						<div id = "FindJob_text">
							<div id = "FindJob_info">
								職缺：
							</div>
							<div id = "FindJob_info">
								簡介：
							</div>
							<div id = "FindJob_info">
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

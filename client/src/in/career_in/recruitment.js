import React, { Component } from 'react';
import './recruitment.css';
import {NavBar_in} from '../../component/AppBar_in';

class Recruitment extends Component{
    render(){
        return (
			<div id = "recruitment_container">
				<div id = "recruitment_titlepage" style={{marginTop:"8%"}} >
					Constructing Recruitment
				</div>
				<div id = "recruitment_text_background" >
					<div id = "recruitment_textpage">
						Constructing Recruitment
					</div>
				</div>
			</div>
        )
    }
}

export default Recruitment;

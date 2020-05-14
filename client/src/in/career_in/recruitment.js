import React, { Component } from 'react';
import './recruitment.css';
import {NavBar_in} from '../../component/AppBar_in';
import Recuritment_block from './recruitment_block/Recruitment_block'
import eesa_icon from '../../images/eesa-icon.png';
import {Link} from 'react-router-dom';

const template = {
	title:'NTUEE+ frontend',
	info:{
		company_name:'NTUEE+',
		work_type:'website engineer',
		salary:'0',
		requirement:'NO',
		diploma:'NTUEE'
	},
	description:'testtesttesttesttesttesttesttesttest',
	image:eesa_icon,
	id:'Recruitment_block_1'
}
const Recruitment = (props) =>{
	
	return(
		<div id = "Recruitment_container">
			<Link>
				<Recuritment_block data = {template} className='Recruitment_block'/>
			</Link>
			<Link>
				<Recuritment_block data = {template} className='Recruitment_block'/>
			</Link>
			

		</div>
	)
}
/*class Recruitment extends Component{
    render(){
        return (

		
		<div id = "recruitment_container">
			<a href=''>
				submmit
			</a>
			<div id = "recruitment_section" >
				<div id = "recruitment_section_1" >
					<div id = "recruitment_title">
						title
					</div>
					<div id = "recruitment_subtitle">
						subtitle
					</div>
				</div>
				<div id = "recruitment_section_2" >
					<div id="recruitment_img">
						<img/>
					</div>
					<div id = "recruitment_text">
						<div id = "recruitment_info">
							職缺：
						</div>
						<div id = "recruitment_info">
							簡介：
						</div>
						<div id = "recruitment_info">
							聯絡：
						</div>
					</div>
				</div>		
			</div>
			<div id = "recruitment_section">
				<div id = "recruitment_section_1" >
					<div id = "recruitment_title">
						title
					</div>
					<div id = "recruitment_subtitle">
						subtitle
					</div>
				</div>
				<div id = "recruitment_section_2" >
					<div id="recruitment_img">
						<img/>
					</div>
					<div id = "recruitment_text">
						<div id = "recruitment_info">
							職缺：
						</div>
						<div id = "recruitment_info">
							簡介：
						</div>
						<div id = "recruitment_info">
							聯絡：
						</div>
					</div>
				</div>		
			</div>
			<div id = "recruitment_section">
				<div id = "recruitment_section_1" >
					<div id = "recruitment_title">
						title
					</div>
					<div id = "recruitment_subtitle">
						subtitle
					</div>
				</div>
				<div id = "recruitment_section_2" >
					<div id="recruitment_img">
						<img/>
					</div>
					<div id = "recruitment_text">
						<div id = "recruitment_info">
							職缺：
						</div>
						<div id = "recruitment_info">
							簡介：
						</div>
						<div id = "recruitment_info">
							聯絡：
						</div>
					</div>
				</div>
			</div>
		</div>
		
        )
    }
}*/

export default Recruitment;

import React, { Component } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import left_image from '../images/left_image.png'
import right_image from '../images/right_image.png'

class Contact extends Component {
	render() {
		return (
			<div>
				<div id='Contact_container'>
					<div
						id='Contact_content_wrap'
						className='container-fluid d-flex justify-content-center mx-auto'
					>
						{/* <NavBar/> */}
						<div id='Contact_left_column' className='mx-3 mx-md-5 '>
							<div id='Contact_left_image'>
								<img
									src={left_image}
									alt='leftImage'
									className='img-fluid Contact_image'
								/>
							</div>
							<p id='Contact_left_text'>
								李筠婕
								<br />
								B06901014
							</p>
						</div>
						<div id='Contact_right_column' className='mx-3 mx-md-5 mx-lg-6'>
							<div id='Contact_right_image'>
								<img
									src={right_image}
									alt='rightImage'
									className='img-fluid Contact_image'
								/>
							</div>
							<p id='Contact_right_text'>
								鄭謹譯
								<br />
								B06901180
							</p>
						</div>
					</div>
					<div className='container d-flex justify-content-center mt-5'>
						<Link to='/Team' id='Contact_link'>
							<button id='Contact_team_btn' className='p-2'>
								&nbsp;&nbsp;History Team&nbsp;&nbsp;
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact

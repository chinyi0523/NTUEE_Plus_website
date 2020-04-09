import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Register.css';
import Facebook_image from '../images/Register_Facebook.png';
import Account_image from '../images/Register_Account.png';
//import axios from 'axios';
import { NavBar } from '../component/AppBar';
class Register extends Component{
	
    render(){
		
        return(
			<div>
				<NavBar/>
            	<div id="Register_container">
					
					<div id ="Register_text" style={{marginTop:"8%"}}>
						Please choose one method to register, strongly recommend via Facebook<br/><br/><br/>
						<Link to="/Register/pages/Register_facebook" ><img src= {Facebook_image} alt="Register by Facebook" height="480" width="320"/></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/Register/pages/Register_account" ><img src= {Account_image} alt="Register by Account" height="480" width="320"/></Link>	
					
						</div>

					</div>
			</div>
        )
    }
}
export default Register
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import eesa_icon from '../images/eesa-icon.png';
import axios from 'axios';
import { NavBar } from '../component/AppBar';
class Register extends Component{
	
    render(){
		
        return(
			<div>
				<NavBar/>
            	<div id="Register_container">
					
					<div id ="Register_text" style={{marginTop:"8%"}}>
						Please choose one method to register, strongly recommend via Facebook<br/>
						<Link to="/Register/pages/Register_account" >Register by account</Link><br/><br/><br/>
						<Link to="/Register/pages/Register_account" >Register by Facebook</Link>	
					
						</div>
            	</div>
			</div>
        )
    }
}
export default Register
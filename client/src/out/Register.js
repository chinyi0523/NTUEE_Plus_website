import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Register.css';
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
						<Link to="/Register/pages/Register_account" ><Button id="Register_btn">Account</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/Register/pages/Register_facebook" ><Button id="Register_btn">Facebook</Button></Link>	
					
						</div>

					</div>
			</div>
        )
    }
}
export default Register
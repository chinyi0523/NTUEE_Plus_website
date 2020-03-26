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
<<<<<<< HEAD
            	</div>
=======
						
						<button id="Register_register_button" onclick={this.handleSubmit}>
							<p id="Register_register_text">Register</p>
						</button>
						
					</form>
                </div>
				
                <div id="Register_FAQ">
                    <div id="Register_FAQ_title">FAQ</div>
					<Link to="/Register/pages/Register_account" >Recruitment</Link>
					<Link to="/Register/pages/Register_facebook" >Facebookin</Link>
                    <div id="Register_splitline"></div>
                    <div id="Register_FAQ_content">
                        <ul id="Register_FAQ_list">
                            <li>ID photo should contain your <em>full name</em> and <em>intact, clear face</em>.</li>
                            <li>The size of photo is at most 1MB.</li>
                            <li>...</li>
                        </ul>
                    </div>
					<div id="Register_FAQ_title">Image Preview</div>
					<div id="Register_splitline"></div>
				<div className="imgPreview" id="Register_imgPreview">
				  			{$imagePreview}
					</div>
                </div>
            </div>
>>>>>>> origin/FacebookPage
			</div>
        )
    }
}
export default Register
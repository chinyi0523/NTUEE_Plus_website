import React, { Component } from 'react';
import './Login.css';
//import './LoginAction.js';
import eesa_icon from './images/eesa-icon.png';
import axios from 'axios';

class Login extends Component{
    constructor(props) {
		super(props);
		this.state = {
		  Login_username_input: '',
		  Login_password_input: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		alert("fine");
		axios.post("http://localhost:1993/api/login", this.state)
		  .then(res => {
			alert("歡迎 "+res.data.data.account);
			console.log(res.data.data.account);
		})
	}
	
	render(){
        return (
            <div id="Login_container">
			
                <div id="Login_input">
				  <form id="loginForm" onSubmit={this.handleSubmit}>
                    <div id="Login_username">
                        <p id="Login_username_tag">Username:</p>
                        <input name="Login_username_input" id="Login_username_input" placeholder="username" value={this.state.value} onChange={this.handleInputChange} autoFocus></input>
                    </div>
                    <div id="Login_password1">
                        <p id="Login_password_tag">Password:</p>
                        <input name="Login_password_input" id="Login_password_input" placeholder="password" type="password" value={this.state.value} onChange={this.handleInputChange}></input>
						<input type="submit" value="Submit" />
					</div>
					
				  </form>
                    <div id="Login_links">
                        <a id="Login_create" href="#">Create a new account</a>
                        <a id="Login_forgot" href="#">Forgot your password?</a>
                    </div>
                </div>

                

                <div id="Login_footer">
                    <img id="Login_logo" src={eesa_icon} alt="logo" width="100px" ></img>
                    <p id="Login_footer_text_1">聯絡信箱:ntueesa@gmail.com</p>
                    <p id="Login_footer_text_2">台灣大學電機工程學系 系學會</p>
                </div>

            </div>			
        )
    }
}

export default Login;
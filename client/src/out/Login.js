import React, { Component } from 'react';
import './Login.css';
import eesa_icon from '../images/eesa-icon.png';
import { Link } from 'react-router-dom';
import axios from "axios";

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
		const name = target.id;
		
		this.setState({
		  [name]: value
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		if(false){
			alert("一些判斷式");
		}else{
			var r=window.confirm("確認登入?");
			if(r){
				axios.post("/api/login", 
					{account:this.state.Login_username_input,
					password:this.state.Login_password_input}
				).then(res => {
					console.log(res.data);
						if(res.data){
							if(res.data.message===true){
								alert('登入成功，歡迎：'+res.data.data.username);
								window.location = "/";
							}else{
								alert("錯誤：\n"+res.data.description);
							}
						}
				})
			}
		}
	}
	
    render(){
        return (
            <div id="Login_container">
			<form onSubmit={this.handleSubmit}>
                <div id="Login_input">
                        <div id="Login_username">
                            <p id="Login_username_tag">Username:</p>
                            <input id="Login_username_input" placeholder="username" autoFocus
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="Login_password1">
                            <p id="Login_password_tag">Password:</p>
                            <input id="Login_password_input" placeholder="password" type="password"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
					<div id="Login_links">
						<Link id = "Login_create" to="/Register">Create a new account</Link>
						<Link id = "Login_forgot" to="/Forget">Forgot your password?</Link>
					</div>
                </div>
                <input id="Login_submit" type="submit" value="LOGIN"/>
            </form>
                <div id="Login_footer">
                    <img id="Login_logo" src={eesa_icon} alt="logo" ></img>
                    <p id="Login_footer_text">聯絡信箱 : ntueesa@gmail.com</p>
                    <p id="Login_footer_text_2">台灣大學電機工程學系 系學會</p>
                </div>
            </div>
        )
    }
}

export default Login;
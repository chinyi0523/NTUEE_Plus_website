import React, { Component } from 'react';
import './Login.css';
import fb_icon from '../images/social_fb.png'
import Footer from "../component/Footer";
import { Link,Redirect } from 'react-router-dom';
import axios from "axios";
import { NavBar } from '../component/AppBar';
class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  Login_username_input: '',
		  Login_password_input: '',
		  isLogin: null
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
				//window.location = "/Home_in";
				
				axios.post("/api/login", 
					{account:this.state.Login_username_input,
					password:this.state.Login_password_input}
				).then(res => {
					console.log(res.data);
						if(res.data){
							if(res.data.message===true){
								alert('登入成功，歡迎：'+res.data.data.username);
								//window.location = "/";
								this.setState({
									isLogin:true
								});
							}else{
								alert("錯誤：\n"+res.data.description);
							}
						}
				})
			}
		}
	}
	
    render(){
		if(this.state.isLogin){
			return <Redirect to="/in" />
		}
		
        return (
            <div id="Login_container">
			<NavBar/> 
			<form onSubmit={this.handleSubmit}>
                <div id="Login_input">
                        <div id="Login_username">
                            <p id="Login_username_tag">Username:</p>
                            <input id="Login_username_input" className="Login_input" placeholder="username" autoFocus
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="Login_password1">
                            <p id="Login_password_tag">Password:</p>
                            <input id="Login_password_input" className="Login_input" placeholder="password" type="password"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
					<div id="Login_links">
						<Link id = "Login_create" to="/Register">Create a new account</Link>
						<Link id = "Login_forgot" to="/Forget">Forgot your password?</Link>
					</div>
                </div>
				
                <input id="Login_submit" type="submit" value="LOGIN"/>
				<div id="Login_hr">&nbsp;&nbsp;&nbsp;or login with...</div>
				<div id="LoginFB_submit">
					<img id="Login_FB_icon" src={fb_icon} alt="fb_icon"></img>
					<a id="Login_FB_url" href="https://www.facebook.com/groups/2484604148528585/" target="_blank" title="Facebook">Facebook</a>
				</div>
            </form>
			
                {/*<div id="Login_footer">
                    <img id="Login_logo" src={eesa_icon} alt="logo" ></img>
                    <p id="Login_footer_text">聯絡信箱 : ntueesa@gmail.com</p>
                    <p id="Login_footer_text_2">台灣大學電機工程學系 系學會</p>
		</div>*/}
		<footer id="index_footer"><Footer/></footer>
            </div>
        )
    }
}

export default Login;
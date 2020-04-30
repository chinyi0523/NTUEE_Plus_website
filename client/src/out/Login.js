import React, { Component } from 'react';
import './Login.css';
import FacebookLogin from 'react-facebook-login';
import ReactDOM from 'react-dom';
// import Footer from "../component/Footer";
import { Link,Redirect } from 'react-router-dom';
import axios from "axios";
import { NavBar } from '../component/AppBar';
import Footer from '../component/Footer/Footer'
class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  Login_username_input: '',
		  Login_password_input: '',
		  Login_facebook_ID: '',
		  isLogin: false,
		  isFBLogin: false
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	handleLogin(isLoginorNot){
		console.log("handleLogin");
		let isLogin = isLoginorNot;
		//console.log('111114hroipsfjiweffberb     '+typeof(this.props.loginFunc))
		//console.log(this.props);
		this.props.loginFunc(isLogin);
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
								this.handleLogin(true)
							}else{
								alert("錯誤：\n"+res.data.description);
								
							}

						}
				})
			}
		}
	}

	handleFBSubmit = (response) => {
		if (response.status == "unknown") {
			return
		}
		axios.post("/api/loginFB", {facebookID: response.userID}).then(res => {
			console.log(res.data);
			if(res.data){
				if(res.data.message===true){
					alert('Logged in! Welcome：'+res.data.username);
					this.setState({
						Login_facebook_ID:response.userID,
						isFBLogin : true,
						isLogin   : true
					});
					this.handleLogin(true)
					
				}else{
					alert('User not registered!');
					this.setState({
						Login_facebook_ID:response.userID,
						isLogin   : false,
						isFBLogin : true
					});
					this.handleLogin(true)
					
				}
			}
		}).catch(err => {
			console.log(err)
			this.handleLogin(false)
		})
	}
	componentWillReceiveProps(){
		this.setState({
			isLogin:this.props.loginstatus
		})
	}
    render(){
		console.log (this.state)
		if(this.state.isLogin){
			
			return <Redirect to="/in" />
		} 
		else if (this.state.isFBLogin) {
			
			return <Redirect to={{pathname:"/Register/pages/Register_facebook", id:this.state.Login_facebook_ID}} />
		}
		
        return (
			<div>
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
            </form>
			
			<FacebookLogin
				appId="176796437077702"
				autoLoad={false}
				fields="name,email,picture"
				callback={this.handleFBSubmit}
				cssClass="btnFacebook"
				icon="fa-facebook"
				textButton = "&nbsp;&nbsp;Sign In with Facebook" 
			/>
            </div>
			<Footer/>
			</div>
        )
    }
}

export default Login;
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import './Register.css';
import Facebook_image from '../images/Register_Facebook.png';
import Account_image from '../images/Register_Account.png';
class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  Login_facebook_ID: '',
		  isLogin: false,
		  isFBLogin: false
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.handleFBSubmit = this.handleFBSubmit.bind(this);
	}
	handleLogin(isLoginorNot){
		console.log("handleLogin");
		let isLogin = isLoginorNot;
		if(isLogin){
			localStorage.setItem('auth',true);
			window.location = 'in';
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
					alert('Already registered! Welcome：'+res.data.username);
					this.setState({
						Login_facebook_ID:response.userID,
						isFBLogin : true,
						isLogin   : true
					});
					this.handleLogin(true)
				}else{
					this.setState({
						Login_facebook_ID:response.userID,
						isLogin   : false,
						isFBLogin : true
					});
					this.handleLogin(false)
				}
			}
		}).catch(err => {
			console.log(err)
			this.handleLogin(false)
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
		return(
            	<div id="Register_container" className="mb-5 mb-md-0">
					<p id ="Register_text" className="my-5 mx-3">
						Please choose one method to register, strongly recommend via Facebook
					</p>
					<div class="row">
						
						<div class="col">
							<FacebookLogin
								appId="176796437077702"
								autoLoad={false}
								fields="name,email,picture"
								callback={this.handleFBSubmit}
										// cssClass="RegisterFB_btn"
								textButton = ""
								render={renderProps => (
									<img id="Register_imgs" onClick={renderProps.onClick} src= {Facebook_image} alt="Register by Facebook" />
								)}
							/>
						</div>
						<div class="col">
							<Link to="/Register/pages/Register_account" >
								<img id="Register_imgs" src= {Account_image} alt="Register by Account" />
							</Link>
						</div>
						<div class="w-100"></div>
					</div>
					
					
						
				</div>
        )
    }
}
export default Register
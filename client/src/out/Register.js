import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import Button from '@material-ui/core/Button';
import './Register.css';
import Facebook_image from '../images/Register_Facebook.png';
import Account_image from '../images/Register_Account.png';
//import axios from 'axios';
import { NavBar } from '../component/AppBar';
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
			<div>
				<NavBar/>
            	<div id="Register_container">
					<div id ="Register_text" style={{marginTop:"8%"}}>
						Please choose one method to register, strongly recommend via Facebook<br/><br/><br/>
						<div id="Register_imgs">
							{/* <Link to="/Register/pages/Register_facebook" ><img src= {Facebook_image} alt="Register by Facebook" height="480" width="320"/></Link>*/}
							<Link to="/Register/pages/Register_account" ><img src= {Account_image} alt="Register by Account" height="480" width="320"/></Link>		
							<FacebookLogin
								appId="176796437077702"
								autoLoad={false}
								fields="name,email,picture"
								callback={this.handleFBSubmit}
								// cssClass="RegisterFB_btn"
								textButton = ""
								render={renderProps => (
									<img id="RegisterFB_img" onClick={renderProps.onClick} src= {Facebook_image} alt="Register by Facebook" height="480" width="320"/>
								)}
							/>
						</div>
					</div>
				</div>
			</div>
        )
    }
}
export default Register
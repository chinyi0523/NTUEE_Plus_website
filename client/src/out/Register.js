import React, { Component } from 'react';
import './Register.css';
import eesa_icon from '../images/eesa-icon.png';
import axios from 'axios';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  Register_realname: '',
		  Register_student_id: '',
		  Register_password: '',
		  Register_confirm_password: ''
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
		if(false){//this.state.Register_password!==this.state.Register_confirm_password){
			return alert("密碼不一致");
		}else{
			var r=window.confirm("確認註冊?");
			if(r){
				axios.post("/api/register", 
					{username:this.state.Register_realname,
					account:this.state.Register_student_id,
					password:this.state.Register_password,
					ConfirmPassword:this.state.Register_confirm_password}
				).then(res => {
					console.log(res.data);
						if(res){
							if(res.data.message===true){
								alert('註冊成功');
								window.location = "/Login";
							}else{
								alert('錯誤：\n'+res.data.description);
							}
						}
				}).catch(err=>{
					console.log("err=",err);
					//[{value:"使用者填的值",msg:"錯的原因",param:"用他拿到是誰錯",location:"body"}]
				})
			}
		}
	}
	
    render(){
        return(
            <div id="Register_container">
                <div id="Register_register_table">
                    <h1 id="Register_table_title">Just A Few Steps to Join EE+!</h1>
					<form onSubmit={this.handleSubmit}>
						<div id="Register_table">
							<div id="Register_input1">
								<p id="Register_realname_label">Your Name</p>
								<input id="Register_realname" placeholder="Your Chinese Name"
									value={this.state.value} onChange={this.handleInputChange}
								></input>
							</div>
							<div id="Register_input2">
								<p id="Register_ID_label">Student ID</p>
								<input id="Register_student_id" placeholder="Student ID"
									value={this.state.value} onChange={this.handleInputChange}
								></input>
							</div>
							<div id="Register_input3">
								<p id="Register_password_label">Password</p>
								<input id="Register_password" placeholder="Set Your Password" type="password"
									value={this.state.value} onChange={this.handleInputChange}
								></input>
							</div>
							<div id="Register_input4">
								<p id="Register_confirm_password_label">Confirm Password</p>
								<input id="Register_confirm_password" placeholder="Confirm Your Password" type="password"
									value={this.state.value} onChange={this.handleInputChange}
								></input>
							</div>
						</div>
						<button id="Register_register_button" onclick={this.handleSubmit}>
							<p id="Register_register_text">Register</p>
						</button>
					</form>
                </div>
                <div id="Register_FAQ">
                    <div id="Register_FAQ_title">FAQ</div>
                    <div id="Register_splitline"></div>
                    <div id="Register_FAQ_content">
                        <ul id="Register_FAQ_list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register
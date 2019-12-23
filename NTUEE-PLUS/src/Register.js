import React, { Component } from 'react';
import './Register.css';
import eesa_icon from './images/eesa-icon.png';
import axios from 'axios';

class Register extends Component{
    constructor(props) {
		super(props);
		this.state = {
		  Register_realname: '',
		  Register_student_id: '',
		  Register_password: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		if(name==="Register_confirm_password"){
			//檢測密碼是否相同
		}else{
			this.setState({
			  [name]: value
			});
		}
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		alert("fine");
		axios.post("http://localhost:1993/register", 
			{username:this.state.Register_realname,account:this.state.Register_student_id,password:this.state.Register_password}
		).then(data => {
			console.log(data);
                if(data){
                    if(data.data.message==false){
                    alert('帳號已存在');
                    }else{
                    alert('註冊成功');
                    }
                }
		})
	}
	render(){
        return(
            <div id="Register_container">
                <div id="Register_register_table">
                    <h1 id="Register_table_title">Just A Few Steps to Join EE+!</h1>
					<form id="signupForm" onSubmit={this.handleSubmit}>
                    <div id="Register_table">
                        <div id="Register_input1">
                            <p id="Register_realname_label">Your Name</p>
                            <input name="Register_realname" id="Register_realname" placeholder="Your Chinese Name" 
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="Register_input2">
                            <p id="Register_ID_label">Student ID</p>
                            <input name="Register_student_id" id="Register_student_id" placeholder="Student ID"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="Register_input3">
                            <p id="Register_password_label">Password</p>
                            <input name="Register_password" id="Register_password" placeholder="Set Your Password" type="password"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="Register_input4">
                            <p id="Register_confirm_password_label">Confirm Password</p>
                            <input name="Register_confirm_password" id="Register_confirm_password" placeholder="Confirm Your Password" type="password"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                    </div>
						<input type="submit" id="Register_register_button" value="Register"/>
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
import React, { Component } from 'react';
import './Forget.css';
import eesa_icon from './images/eesa-icon.png';
import axios from 'axios';

class Forget extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  Forget_ID: '',
		  Forget_email: '',
		  Forget_movie: '',
		  Forget_password: ''
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
		axios.post("http://localhost:1993/api/forget", 
			{StudentID:this.state.Forget_ID,Email:this.state.Forget_email,question:this.state.Forget_movie,password:this.state.Forget_password}
		).then(data => {
			console.log(data);
			if(data){
				if(data.data.message===false){
				alert('答錯');
				}else if(data.data.message===true) {
				alert('信件寄出');
				}
			}
		})
	}
	
    render(){
        return(
            <div id="container">
                <div id="register_table">
				<form id="signupForm" onSubmit={this.handleSubmit}>
                    <div id="table">
                        <div id="input">
                            <p id="input_text">Student ID</p>
                            <input name="Forget_ID" id="input_input" placeholder="Student ID"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="input">
                            <p id="input_text">Your Email</p>
                            <input name="Forget_email" id="input_input" placeholder="Your Email"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="input">
                            <p id="input_text">Quation</p>
                            <input name="Forget_movie" id="input_input" placeholder="Your favorite movie" type="password"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                        <div id="input">
                            <p id="input_text">Template Password</p>
                            <input name="Forget_password" id="input_input" placeholder="登入後須設定新密碼"
								value={this.state.value} onChange={this.handleInputChange}
							></input>
                        </div>
                    </div>
                    
                    <div id="button">
                        <input type="submit" value="RESET PASSWORD"/>
                    </div>
				</form>
                </div>
                <div id="FAQ">
                    <div id="FAQ_title">FAQ</div>
                    <div id="splitline"></div>
                    <div id="FAQ_content">
                        <ul id="FAQ_list">
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
export default Forget
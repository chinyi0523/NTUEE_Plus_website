import React, { Component } from 'react';
import './Register.css';
import eesa_icon from '../images/eesa-icon.png';
import axios from 'axios';
import { NavBar } from '../component/AppBar';
class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  Register_realname: '',
		  Register_student_id: '',
		  Register_password: '',
		  Register_confirm_password: '',
		  imagePreviewUrl: '',
		  file: null
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
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
		if(false){//this.state.Register_password!==this.state.Register_confirm_password){
			return alert("密碼不一致");
		}else{
			var r=window.confirm("確認註冊?");
			if(r){
				var data = new FormData();
				data.append('file',this.state.file)
				data.append('username',this.state.Register_realname)
				data.append('account',this.state.Register_student_id)
				data.append('password',this.state.Register_password)
				data.append('ConfirmPassword',this.state.Register_confirm_password)
				console.log('data',data)
				const config = {
					headers: {
						'content-type': 'multipart/form-data'
					}
				};
				axios.post("/api/register",
					data
					/*{username:this.state.Register_realname,
					account:this.state.Register_student_id,
					password:this.state.Register_password,
					ConfirmPassword:this.state.Register_confirm_password,
					file:this.state.file}*/,
					config
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
	
	handleImageChange(e) {
		//e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];
		console.log('t',e.target)
		this.setState({
			file:file
		})
		reader.onloadend = () => {
			console.log('onloadend');
		  this.setState({
			imagePreviewUrl: reader.result
		  });
		}

		reader.readAsDataURL(file)
		console.log(this.state.file)
	}
	
    render(){
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
		  $imagePreview = (<img src={imagePreviewUrl} id="Register_id_photo"/>);
		} else {
		  $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
        return(
			<div>
				<NavBar/>
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
							<div id="Register_input5">
								<p id="Register_question_label">Question</p>
								<input id="Register_question" placeholder="ex: the name of your first pet, etc..." type="text"
								 onChange = {this.handleInputChange}></input>
							</div>
							<div id="Register_input6">
								<p id="Register_image_label">Upload Image</p>
								<label>
								<input className="fileInput" id="Register_fileinput" 
										type="file" 
										onChange={this.handleImageChange} 
										name="file"/>
								<span id="Register_addImage_icon">➕ <p style={{display:"inline",fontSize:"18px"}}>Add Your ID Photo</p></span>
								</label>
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
			</div>
        )
    }
}
export default Register
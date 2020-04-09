import React, { Component } from 'react';
import axios from 'axios';
import { NavBar } from '../../component/AppBar';
import {withRouter} from 'react-router-dom'

class Register_facebook extends Component{
	constructor(props) {
		super(props);
		this.state = {
			Register_acc_realname: '',
			Register_acc_student_id: '',
		  	Register_facebook_id: props.location.id,
		  	imagePreviewUrl: '',
		  	file: null
		};
		console.log(props.location.id)
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

		var r=window.confirm("Are you sure to register via Facebook account?");
		if(r){
			var data = new FormData();
			data.append('file',this.state.file)
			data.append('username',this.state.Register_acc_realname)
			data.append('account',this.state.Register_acc_student_id)
			data.append('id', this.state.Register_facebook_id)
			const config = {
				headers: {
					'content-type': 'multipart/form-data'
				}
			};
			axios.post("/api/registerFB",
				data, config
			).then(res => {
				console.log(res.data);
					if(res){
						if(res.data.message===true){
							alert('Successfully registered!');
							window.location = "/Login";
						}else{
							alert('Error：\n'+res.data.description);
						}
					}
			}).catch(err=>{
				console.log("err=",err);
			})
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
            <div id="Register_acc_container">
                <div id="Register_acc_register_table">
                    <h1 id="Register_acc_table_title">Just A Few Steps to Join EE+ With Facebook!</h1>
					<form onSubmit={this.handleSubmit}>
						<div id="Register_acc_table">
							<div id="Register_acc_input1">
								<p id="Register_acc_realname_label">Your Name</p>
								<input id="Register_acc_realname" placeholder="Your Chinese Name"
									value={this.state.value} onChange={this.handleInputChange}
								></input>
							</div>
							<div id="Register_acc_input2">
								<p id="Register_acc_ID_label">Student ID</p>
								<input id="Register_acc_student_id" placeholder="Student ID"
									value={this.state.value} onChange={this.handleInputChange}
								></input>
							</div>
							<div id="Register_acc_input6">
								<p id="Register_acc_image_label">Upload Image</p>
								<label>
								<input className="fileInput" id="Register_fileinput" 
										type="file" 
										onChange={this.handleImageChange} 
										name="file"/>
								<span id="Register_acc_addImage_icon">➕ <p style={{display:"inline",fontSize:"18px"}}>Add Your ID Photo</p></span>
								</label>
							</div>
							
						</div>
						
						<button id="Register_acc_register_button" onclick={this.handleSubmit}>
							<p id="Register_acc_register_text">Register</p>
						</button>
						
					</form>
                </div>
				
                <div id="Register_acc_FAQ">
                    <div id="Register_acc_FAQ_title">FAQ</div>
                    <div id="Register_acc_splitline"></div>
                    <div id="Register_acc_FAQ_content">
                        <ul id="Register_acc_FAQ_list">
                            <li>ID photo should contain your <em>full name</em> and <em>intact, clear face</em>.</li>
                            <li>The size of photo is at most 1MB.</li>
                            <li>...</li>
                        </ul>
                    </div>
					<div id="Register_acc_FAQ_title">Image Preview</div>
					<div id="Register_acc_splitline"></div>
				<div className="imgPreview" id="Register_imgPreview">
				  			{$imagePreview}
					</div>
                </div>
            </div>
			</div>
        )
    }
}
export default withRouter(Register_facebook)
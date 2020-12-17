import React, { Component, useState } from "react"
import "./Forget.css"
import handleInputChange from "./funcTest/handleInputChange"
import axios from 'axios'

function Forget() {
	const [Forget_ID] = useState("")
	const [Forget_email] = useState("")
	const [Forget_question] = useState("")
	const [Forget_password] = useState("")
	const [Forget_confirm_password] = useState("")
	const [value] = useState()
	

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		if (false) {//this.state.Forget_password!==this.state.Forget_confirm_password){
			alert("密碼不一致");
		} else {
			let r = window.confirm("一個更改密碼的頁面連結將寄到信箱");
			if (r) {
				axios.post("/api/forget",
					{
						account:Forget_ID//,
						// password:Forget_password,
						// question:Forget_question,
						// Email:Forget_email,
						// ConfirmPassword:Forget_confirm_password
					}
				).then(res => {//{email}
					alert('連結已寄到'+res.data.email);
					window.location = "/Login";
				}
				).catch(err => {//{description}
					(err.response.data.description) && alert('錯誤\n'+err.response.data.description);
				})
			}
		}
	}


	return (
		<div id="Forget_container">
			{/*======== a div being a 5rem margin-top ============*/}
			<div className="w-100" style={{ height: "5rem" }}></div>
			{/*======== a div being a 5rem margin-top ============*/}

			{/*=====================main form=====================*/}
			<div id="Forget_left_table" className="container justify-content-center mt-2 mt-md-5 mx-3 mx-md-5">
				<form onSubmit={handleSubmit}>
				{/*==================input area=====================*/}
				<div id="Forget_input" className="form-group row">
						<label id="Forget_input_text" className="col-form-label col-lg-3 col-4 text-center text-md-left" for="StudentID">Student ID</label>
						<input name="Forget_ID"
							id="Forget_input_input"
							className="form-control col-5 col-lg-6 offset-1"
							placeholder="Student ID"
							value={value}
							onChange={() => handleInputChange()}
						></input>
					</div>
					{/*==================input area=====================*/}
					<div id="Forget_btn" className="justify-content-center d-flex mt-4">
						<button id="Forget_btn_text" onclick={handleSubmit}>
							Send Link to Mail
						</button>
					</div>
				</form>
			</div>
			{/*=====================main form=====================*/}
		</div>
	) 
}
export default Forget

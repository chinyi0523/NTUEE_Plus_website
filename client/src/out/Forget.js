import React, { Component } from 'react'
import './Forget.css'
import axios from 'axios'
import handleInputChange from './funcTest/handleInputChange'

class Forget extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Forget_ID: '',
			Forget_email: '',
			Forget_question: '',
			Forget_password: '',
			Forget_confirm_password: '',
		}

		this.handleInputChange = handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		// console.log(this.state)
		if (false) {
			alert('密碼不一致')
		} else {
			var r = window.confirm('一個更改密碼的頁面連結將寄到信箱')
			if (r) {
				axios
					.post('/api/forget', {
						account: this.state.Forget_ID,
					})
					.then((res) => {
						// console.log(res.data)
						if (res) {
							if (res.data.message === true) {
								alert('連結已寄到' + res.data.data.email)
							} else {
								alert('錯誤：\n' + res.data.description)
							}
						}
					})
			}
		}
	}

	render() {
		return (
			<div>
				<div id='Forget_container'>
					<div className='w-100' style={{ height: '5rem' }}></div>
					<div
						id='Forget_left_table'
						className='container justify-content-center mt-2 mt-md-5 mx-3 mx-md-5'
					>
						<form onSubmit={this.handleSubmit}>
							<div id='Forget_input' className='form-group row'>
								<label
									for='StudentID'
									id='Forget_input_text'
									className='col-form-label col-lg-3 col-4 text-center text-md-left'
								>
									Student ID
								</label>
								<input
									name='Forget_ID'
									id='Forget_input_input'
									placeholder='Student ID'
									value={this.state.value}
									onChange={this.handleInputChange}
									className='form-control col-5 col-lg-6 offset-1'
								></input>
							</div>

							<div
								id='Forget_btn'
								className='justify-content-center d-flex mt-4'
							>
								<button id='Forget_btn_text' onclick={this.handleSubmit}>
									Send Link to Mail
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default Forget

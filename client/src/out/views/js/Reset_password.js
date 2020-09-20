import React, { Component } from 'react'
import '../css/ResetPassword.css'
import axios from 'axios'
import handleInputChange from '../../controllers/handleInputChange'

class Reset_password extends Component {
	constructor(props) {
		super(props)
		this.state = {
			account: '',
			active: '',
			Reset_password: '',
			Reset_confirm_password: '',
		}

		this.handleInputChange = handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		try {
			this.setState({
				account: this.props.match.params.account,
				active: this.props.match.params.active,
			})
		} catch {
			// console.log(this.props)
			alert('驗證碼不存在')
		}
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(this.state)
		if (
			this.state.Reset_password !== this.state.Reset_confirm_password ||
			this.state.Reset_password === ''
		) {
			alert('密碼不一致或為空')
		} else {
			var r = window.confirm('密碼即將更改')
			if (r) {
				axios
					.post('/api/activation', {
						account: this.state.account,
						password: this.state.Reset_password,
						active: this.state.active,
					})
					.then((res) => {
						console.log(res.data)
						if (res) {
							if (res.data.message === true) {
								alert('密碼變更成功，請登入')
								window.location = '/Login'
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
									value={this.state.account}
									// onChange={this.handleInputChange}
									disabled={true}
									className='form-control col-5 col-lg-6 offset-1'
								></input>
							</div>

							<div id='Forget_input' className='form-group  row'>
								<label
									id='Forget_input_text'
									className='col-form-label col-lg-3 col-4 text-center text-md-left'
								>
									New Password
								</label>
								<input
									name='Reset_password'
									id='Forget_input_input'
									type='password'
									placeholder='設定新密碼'
									value={this.state.Reset_password}
									onChange={this.handleInputChange}
									className='form-control col-5 col-lg-6 offset-1'
								></input>
							</div>
							<div id='Forget_input' className='form-group row'>
								<label
									id='Forget_input_text'
									className='col-form-label col-lg-3 col-4 text-center text-md-left'
								>
									Confirm Password
								</label>
								<input
									name='Reset_confirm_password'
									id='Forget_input_input'
									type='password'
									placeholder='再次輸入密碼'
									value={this.state.Reset_confirm_password}
									onChange={this.handleInputChange}
									className='form-control col-5 col-lg-6 offset-1'
								></input>
							</div>
							<div
								id='Forget_btn'
								className='justify-content-center d-flex mt-4'
							>
								<button id='Forget_btn_text' onClick={this.handleSubmit}>
									RESET PASSWORD
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Reset_password

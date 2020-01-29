import React, { Component } from 'react';
import axios from "axios";

class LoginChange extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			account:'',
			question:''
		};
	}
	
	showPersonal(){
		axios.post("/api/showPersonal", 
			{}
		).then(res => {
			console.log(res.data);
				if(res.data){
					if(res.data.message===true){
						this.setState({
							username:res.data.data.username,
							account:res.data.data.account,
							question:res.data.data.SQ
						});
					}else{
						alert('已自動登出');
					}
				}
		})
	}
	
	handleInputChange=event=>{
		const target = event.target;
		const value = target.value;
		const name = target.id;
		
		if(name==="safe_Question"){
			this.setState({question: value});
		}
	}
	
	componentDidMount(){
		this.showPersonal();
	}
	
	btn_click=e=>{
		e.preventDefault();
		this.showPersonal();
	}
	
	handleSubmit=event=>{
		event.preventDefault();
		console.log(this.state);
		if(this.state===""){
			alert("該值不得為空");
		}else{
			var r=window.confirm("確認更改安全問題?");
			if(r){
				axios.post("/api/chLogin", 
					{question:this.state.question}
				).then(res => {
					console.log(res.data);
						if(res.data){
							if(res.data.message===true){
								alert('更改完成');
							}else{
								alert('更改失敗');
							}
						}
				})
			}
		}
	}
	
	render(){
		return (
			<div description="personalInfo">
			  <button onClick={this.btn_click}>refresh</button>
			  <table>
				<tr>
					<td>學號</td>
					<td>{this.state.account}</td>
				</tr>
				<tr>
					<td>姓名</td>
					<td>{this.state.username}</td>
				</tr>
				<tr>
					<td>安全問題</td>
					<td>
						<form onSubmit={this.handleSubmit}>
						<input id="safe_Question" placeholder="username" autoFocus
							value={this.state.question} onChange={this.handleInputChange}
						></input>
						<input type="submit" value="修改" />
						</form>
					</td>
				</tr>
			  </table>
			</div>
		);
	}
}
 
export default LoginChange;
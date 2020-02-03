import React, { Component } from 'react';
import "./LoginChange.css"
//import axios from "axios";

class LoginChange extends Component {
	/*constructor(props) {
		super(props);
		this.state = {
			username:'',
			account:'',
			question:''
		};
		this.handleSubmit = this.handleSubmit.bind(this)
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
						alert('錯誤：\n'+res.data.description);
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
	}*/
	
	render(){
		return (
			<div description="personalInfo" id="LC_container">
			  <div id="LC_hr">Security Question Reset</div>
			  <form >{/*onSubmit={this.handleSubmit}}*/}
			  <button id="LC_refresh_btn" /*onClick={"this.btn_click"}*/>refresh</button>
			  <table id = "LC_table" cellSpacing="10">
				<tr>
					<td>學號</td>
					<td colSpan="2">{"this.state.account"}</td>
				</tr>
				<tr>
					<td>姓名</td>
					<td colSpan="2">{"this.state.username"}</td>
				</tr>
				<tr>
					<td>安全問題</td>
					<td colSpan="2">
						
						<input id="LC_safe_Question" placeholder="username" autoFocus
							/*value={this.state.question} onChange={this.handleInputChange}*/>
						</input>
					
					</td>
				</tr>
				
			  </table>
			  <input id="LC_submit_btn" type="submit" value="Change" />
			  </form>
			</div>
		);
	}
}
 
export default LoginChange;
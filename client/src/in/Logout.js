import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';

class Logout extends Component {
	logoutbtn(){
		axios.post("/api/logout", 
			{}
		).then(res => {
			console.log(res.data);
				if(res.data){
					if(res.data.message===true){
						alert('登出成功');
						window.location = "/Login";
					}else{
						alert('登出失敗');
					}
				}
		})
	}
	
	btn_click=e=>{
		e.preventDefault();
		this.logoutbtn();
	}
	
	render(){
		return (
			<div description="logout">
			  <Button onClick={this.btn_click}>Logout</Button>
			</div>
		);
	}
}


export default Logout;
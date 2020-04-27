import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import ReactDOM from "react-dom";
import './search.css';
import {NavBar_in} from '../component/AppBar_in';
import axios from 'axios';

import {handleInputChange} from "./searchFunc/handleChange";

var map = [
	["account","account"],
	["username","username"],
	["nickname","nickname"],
	["profile","profile"],
	["publicEmail","publicEmail"],
	["office","office"],
	["homephone","homephone"],
	["cellphone","cellphone"],
	["major","education.major"],
	["double_major","education.double_major"],
	["minor","education.minor"],
	["master","education.master"],
	["doctor","education.doctor"],
	["Company","Occupation.C"],
	["Occupation","Occupation.O"],
	["Position","Occupation.P"]
];

class Search extends Component{
    constructor(props) {
		super(props);
		var tmpState = {hasChanged:{}};
		map.forEach(arr=>{
			tmpState[arr[1]]='';
		});
		tmpState["select"] = "1";
		this.state = tmpState;
		this.handleInputChange = handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.creatTable = this.creatTable.bind(this);
	}
	
	handleSubmit(event){
		event.preventDefault();
		var r = window.confirm("確認搜尋?");
		if(r){
			const searchIndex = parseInt(this.state.select)-1;
			var toSend = {};
			toSend[map[searchIndex][1]]=this.state.toSend;
			/*map.forEach(arr=>{
				if(this.state.hasChanged[arr[1]]){
					toSend[arr[1]] = this.state[arr[1]]
				}
			})*/
			console.log('toSend',toSend)
			axios.post("/api/searchVisual",
				toSend
			).then(res=>{
				if(res.data){
					if(res.data.message===true){
						const receive = res.data.data;
						console.log('獲得'+receive.length+'筆資料');
						console.log(receive);
					}else{
						alert("錯誤: \n"+res.data.description);
					}
				}
			})
		}
	}
	/*componentDidMount(){
		this.creatTable();
	}*/
	creatTable(){
		var ST = document.getElementById("Search_table");
		map.forEach(arr=>{
			var new_tr = document.createElement("tr");
			
			var new_td1 = document.createElement("td");
			new_td1.innerHTML=arr[0];
			
			var new_td2 = document.createElement("td");
			new_td2.setAttribute("colSpan",2);
			var new_input = document.createElement("input");
			new_input.setAttribute("name",arr[1]);
			new_input.setAttribute("value",this.state[arr[1]])
			new_input.onchange = this.handleInputChange;
			new_td2.appendChild(new_input)
			
			new_tr.appendChild(new_td1)
			new_tr.appendChild(new_td2)
			
			ST.appendChild(new_tr)
		})
	}
	render(){
        return (
	       <div id = "search_container">
			<form id="search_Form" onSubmit={this.handleSubmit}>
				<div id = "search_div">
					<div id="search_all_type">
						<div id="search_type">
							<div>account<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>username<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>nickname<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>profile<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>publicEmail<input type="checkbox" value="no"/></div>
							<input/>
						</div>
					</div>
					<div id="search_all_type">
						<div id="search_type">
							<div>office<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>homephone<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>cellphone<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>major<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>double_major<input type="checkbox" value="no"/></div>
							<input/>
						</div>
					</div>
					<div id="search_all_type">
						<div id="search_type">
							<div>minor<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>master<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>doctor<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type">
							<div>company<input type="checkbox" value="no"/></div>
							<input/>
						</div>
						<div id="search_type"><input id="search_btn" type="submit" value="Search" /></div>	
					</div>
				</div>
			</form>
		</div>
        )
    }
}

export default Search;
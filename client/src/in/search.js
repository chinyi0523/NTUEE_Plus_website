import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import ReactDOM from "react-dom";
import './search.css';
import {NavBar_in} from '../component/AppBar_in';
import axios from 'axios';
import Search_result from './search_block/Search_result';
import {handleInputChange} from "./searchFunc/handleChange";
import Search_input from './search_block/Search_input';
import { white } from 'ansi-colors';
import Scrollbar from 'react-scrollbars-custom';
import arrow_search from '../images/arrow_search.png'

var map = [
	["Account","account"],
	["Username","username"],
	["Nickname","nickname"],
	["Profile","profile"],
	["Email","publicEmail"],
	["Office Tel","office"],
	["Home Tel","homephone"],
	["Mobile","cellphone"],
	["Major","education.major"],
	["Double Major","education.double_major"],
	["Minor","education.minor"],
	["Master","education.master"],
	["Doctor","education.doctor"],
	["Company","Occupation.C"],
	["Occupation","Occupation.O"],
	["Position","Occupation.P"]
];

class Search extends Component{
    constructor(props) {
		super(props);
		var tmpState = {hasChanged:{},
						result_num:0,
						search_result:null,
						search_list:[],
						searching:false,
					};
		map.forEach(arr=>{
			tmpState[arr[1]]='';
		});
		tmpState["select"] = "1";
		if(this.props.location !== undefined){
			this.state = this.props.location.state
		}else{
			this.state = tmpState;
		}
		
		this.handleInputChange = handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.creatTable = this.creatTable.bind(this);
		this.hasChangedSetter = this.hasChangedSetter.bind(this);
	}

	hasChangedSetter(newHasChanged){
		this.setState({
			hasChanged:newHasChanged
		},function(){
			console.log('===hasChangedSetter===')
			console.log(this.state.hasChanged)
			console.log('======================')
		})
	}

	
	handleSubmit(event){
		console.log('===========')
		console.log('Submit')
		console.log('===========')
		event.preventDefault();
		let list = []
		for (let catalog in this.state.hasChanged){
			if(this.state.hasChanged[catalog]){
				list.push(catalog)
			}
		}
		this.setState({
			search_list:list
		})
		var r = window.confirm("確認搜尋?");
		if(r){
			const searchIndex = parseInt(this.state.select)-1;
			var toSend = {};
			toSend[map[searchIndex][1]]=this.state.toSend;
			map.forEach(arr=>{
				if(this.state.hasChanged[arr[1]]){
					toSend[arr[1]] = this.state[arr[1]]
				}
			})
			console.log('toSend',toSend)
			this.setState({
				searching:true,
			})
			axios.post("/api/searchVisual",
				toSend
			).then(res=>{
				if(res.data){
					if(res.data.message===true){
						const receive = res.data.data;
						console.log('獲得'+receive.length+'筆資料');
						console.log(receive);
						this.setState({
							search_result:receive,
							result_num:receive.length
						})
					}else{
						alert("錯誤: \n"+res.data.description);
					}

					this.setState({
						searching:false,
					})
				}
			})

		}
		// this.props.history.replace( this.props.location.pathname, this.state);
	}
	/*componentDidMount(){
		
		setTimeout(
			document.getElementById('Search_container_bg').style.backgroundColor='rgba(0,0,0,0.6)'
		,2000)
	}
	componentWillUnmount(){
		document.getElementById('Search_container_bg').style.backgroundColor='transparent';
	}*/
	
	// creatTable(){
	// 	var ST = document.getElementById("Search_table");
	// 	map.forEach(arr=>{
	// 		var new_tr = document.createElement("tr");
			
	// 		var new_td1 = document.createElement("td");
	// 		new_td1.innerHTML=arr[0];
			
	// 		var new_td2 = document.createElement("td");
	// 		new_td2.setAttribute("colSpan",2);
	// 		var new_input = document.createElement("input");
	// 		new_input.setAttribute("name",arr[1]);
	// 		new_input.setAttribute("value",this.state[arr[1]])
	// 		new_input.onchange = this.handleInputChange;
	// 		new_td2.appendChild(new_input)
			
	// 		new_tr.appendChild(new_td1)
	// 		new_tr.appendChild(new_td2)
			
	// 		ST.appendChild(new_tr)
	// 	})
	// }
	// componentDidMount(){
	// 	this.creatTable();
	// }
	render(){
		const renderThumb = ({ style, ...props }) => {
			const thumbStyle = {
			borderRadius: 6,
			backgroundColor: 'rgba(192,192,200, 0.5)'
			};
			return <div style={{ ...style, ...thumbStyle }} {...props} />;}

		let $search_result = null;
		if (this.state.result_num!==0){
			$search_result = (<Search_result num={this.state.result_num} result={this.state.search_result} search_list={this.state.search_list} prevstate={this.state}/>)
		}else{
			if(this.state.searching){
				$search_result = (<p style={{textAlign:'center'}}>Searching...</p>)
			}else{
				$search_result = (<p style={{textAlign:'center'}}>Search what you want </p>)
			}
		}
        return (
			<div id='Search_container_bg'>
				<div id='Search_left_container'>
					<form onSubmit={this.handleSubmit} id='Search_form'>
					<Search_input
					hasChangedSetter = {this.hasChangedSetter}
					handleInputChange = {this.handleInputChange}
					></Search_input>
					{/* <div id="Search_table" style={{color:"black",fontSize:"20px",marginTop:"20vh",marginLeft:"5vw"}}> */}

					{/* </div> */}
					<input type="submit" name="submit" value="Search"/>
					</form>
				</div>
				{/* <label id="Search_submit">
					<input type="submit" name="submit" value="Search" style={{display:'none'}}/>
					<span><img src={arrow_search}></img></span>
				</label> */}
				
				
				
				<div id='Search_right_container'>
				<Scrollbar renderThumbVertical={renderThumb}>
					{$search_result}
					</Scrollbar>
				</div>
			</div>
        )
    }
}

export default Search;
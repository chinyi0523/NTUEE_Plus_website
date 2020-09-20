import React, { Component } from 'react'
import '../../css/Search.css'
// import axios from 'axios'
// import { handleInputChange } from '../../../controllers/searchFunc/handleChange'
import Search_input from './search_block/Search_input'
// var map = [
// 	['account', 'account'],
// 	['username', 'username'],
// 	['nickname', 'nickname'],
// 	['profile', 'profile'],
// 	['publicEmail', 'publicEmail'],
// 	['office', 'office'],
// 	['homephone', 'homephone'],
// 	['cellphone', 'cellphone'],
// 	['major', 'education.major'],
// 	['double_major', 'education.double_major'],
// 	['minor', 'education.minor'],
// 	['master', 'education.master'],
// 	['doctor', 'education.doctor'],
// 	['Company', 'Occupation.C'],
// 	['Occupation', 'Occupation.O'],
// 	['Position', 'Occupation.P'],
// ]

const Search = (props) => {
	return (
		<div>
			<Search_input />
		</div>
	)
}
export default Search

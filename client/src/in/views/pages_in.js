import React from 'react'
import Column_app from './js/column/Column_app'
import Column from './js/column/Column'
import Career_app from './js/career/Career_app'
import Career from './js/career/Career'
import Study from './js/Study'
import Main_in from './js/Main_in'
import Search from './js/search/Search'
import Uploadimage from './js/Uploadimage'

const Column_app_page = () => {
	return <Column_app />
}
const Column_page = () => {
	return <Column />
}
const Career_app_page = () => {
	return <Career_app />
}
const Career_page = () => {
	return <Career />
}
const Study_page = () => {
	return <Study />
}
const Search_page = () => {
	return <Search />
}
const Main_in_page = () => {
	return <Main_in />
}
const Upload_image_page = () => {
	return <Uploadimage />
}

export {
	Column_page,
	Career_page,
	Study_page,
	Search_page,
	Main_in_page,
	Upload_image_page,
	Column_app_page,
	Career_app_page,
}

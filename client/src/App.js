import React from 'react'
import { Route } from 'react-router-dom'
import {
	Home_page,
	Login_page,
	Support_page,
	About_page,
	Contact_page,
	Register_page,
	Forget_page,
	Team_page,
	History_page,
	Register_app_page,
	Reset_password_page,
	Policy_page,
} from './out/views/pages'
import './App.css'
import { NavBar } from './component/AppBar'
import Footer from './component/Footer/Footer'
const App = () => {
	return (
		<div className='contain'>
			<NavBar />
			<Route path='/' exact component={Home_page} />
			<Route path='/Login' component={Login_page} />
			<Route path='/Support' component={Support_page} />
			<Route path='/About' component={About_page} />
			<Route path='/Contact' component={Contact_page} />
			<Route path='/Register' exact component={Register_page} />
			<Route path='/Register/pages' component={Register_app_page} />
			<Route path='/Forget' component={Forget_page} />
			<Route path='/Team' component={Team_page} />
			<Route
				path='/ResetPassword/:account/:active'
				component={Reset_password_page}
			/>
			<Route path='/History' component={History_page} />
			<Route path='/Policy' component={Policy_page} />
			<Footer />
		</div>
	)
}

export default App

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
} from './out/pages'
import register_app from './out/register_in/register_app'
import Login from './out/Login'
import './App.css'
import { NavBar } from './component/AppBar'
import Footer from './component/Footer/Footer'
import ResetPassword_page from './out/ResetPassword'
import Policy_page from './out/Policy'
const App = () => {
	return (
		<div className='contain'>
			<NavBar />
			<Route path='/' exact component={Home_page} />
			<Route path='/Login' render={(props) => <Login {...props} />} />
			<Route path='/Support' component={Support_page} />
			<Route path='/About' component={About_page} />
			<Route path='/Contact' component={Contact_page} />
			<Route path='/Register' exact component={Register_page} />
			<Route path='/Register/pages' component={register_app} />
			<Route path='/Forget' component={Forget_page} />
			<Route path='/Team' component={Team_page} />
			<Route
				path='/ResetPassword/:account/:active'
				component={ResetPassword_page}
			/>
			<Route path='/History' component={History_page} />
			<Route path='/Policy' component={Policy_page} />
			<Footer />
		</div>
	)
}

export default App

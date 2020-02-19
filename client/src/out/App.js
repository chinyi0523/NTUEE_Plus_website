import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home_page,Login_page, Support_page,About_page ,Contact_page,Register_page,Forget_page } from './pages';
import { Home_in_page, Column_page } from '../in/pages_in'; 
import { NavBar } from '../component/AppBar'

class App extends Component {
  render() {
    return (
      <div className="container">
		{/* The corresponding component will show here if the current URL matches the path */}
		
		    <Route path="/" exact component={Home_page} />
        <Route path="/Login" component={Login_page} />
        <Route path="/Support" component={Support_page} />
		    <Route path="/About" component={About_page} />
        <Route path="/Contact" component={Contact_page} />
        <Route path="/Register" component={Register_page} />
        <Route path="/Forget" component={Forget_page} />
        <Route path="/Home_in" component={Home_in_page} />
        <Route path="/Column" component={Column_page} />
      </div>
    );
  }
}

export default App;
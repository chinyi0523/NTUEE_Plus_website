import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home_page,Login_page, Support_page,About_page ,Contact_page } from './pages';
import { NavBar } from './component/AppBar'

class App extends Component {
  render() {
    return (
      <div className="container">
		{/* The corresponding component will show here if the current URL matches the path */}
		<NavBar/>
		<Route path="/" exact component={Home_page} />
        <Route path="/Login" component={Login_page} />
        <Route path="/Support" component={Support_page} />
		<Route path="/About" component={About_page} />
        <Route path="/Contact" component={Contact_page} />
      </div>
    );
  }
}

export default App;
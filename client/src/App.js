import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home_page,Login_page, Support_page,About_page ,Contact_page,Register_page,Forget_page } from './out/pages';
import { Home_in_page, Column_page,Recruit_study_page, Main_in_page } from './in/pages_in'; 
import { NavBar } from './component/AppBar'
import register_app from './out/register_in/register_app';
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
        <Route path="/Register" exact component={Register_page} />
        <Route path="/Register/pages" component = {register_app}/>
        <Route path="/Forget" component={Forget_page} />
        <Route path="/in" component={Main_in_page} />
      </div>
    );
  }
}

export default App;
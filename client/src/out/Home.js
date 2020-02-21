import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Route,Switch} from "react-router-dom";
import { Login_page, Support_page,About_page ,Contact_page,Register_page,Forget_page } from './pages';
import "./Home.css"
import Footer from "../component/Footer";
import { NavBar } from '../component/AppBar';
//import LoginChange from "./LoginChange";
//import VisualChange from "./VisualChange";
//import Profile from "../in/profile";
class Home extends Component{
	
    render(){
        
        return ( 
        <div>
            <NavBar/> 
        <div id = "Home_title">
            
			NTUEE+
			{/*<Profile />
			<LoginChange />
			<VisualChange />*/}
			
        </div>
        <footer id="index_footer"><Footer/></footer>
        </div> 
        )
    }
}

export default Home;

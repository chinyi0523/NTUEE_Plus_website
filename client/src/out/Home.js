import React, { Component } from 'react';
import "./Home.css"
// import Footer from "../component/Footer";
import { NavBar } from '../component/AppBar';
class Home extends Component{
	
    render(){
        
        return ( 
        <div>
            <NavBar/> 
        <div id = "Home_title">
            
			NTUEE+
			
        </div>
        {/* <footer id="index_footer"><Footer/></footer> */}
        </div> 
        )
    }
}

export default Home;




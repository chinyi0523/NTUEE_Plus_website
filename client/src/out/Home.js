import React, { Component } from 'react';
import "./Home.css"
import Footer from "../component/Footer"

class Home extends Component{
    render(){
        return (
        <div id = "Home_title">
           NTUEE+
           <div id = "Home_footer"><Footer/></div>
        </div>
        )
    }
}

export default Home;

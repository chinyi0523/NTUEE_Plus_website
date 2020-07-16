import React, { Component } from 'react';
import './Contact.css';
import {Link} from "react-router-dom";
import left_image from '../images/left_image.png';
import right_image from '../images/right_image.png';
import { NavBar } from '../component/AppBar';
import Footer from '../component/Footer/Footer'
// import Footer from "../component/Footer";
class Contact extends Component{
    render(){
        return (
        <div>
        <div id="Contact_container">
            <div id="Contact_content_wrap">
            {/* <NavBar/> */}
                <div id="Contact_left_column">
                    <div id="Contact_left_image"><img src={left_image} alt="leftImage" width="250px" height="250px" /></div>
                    <p id="Contact_left_text">
                        李筠婕
                        <br />
                        B06901014
                    </p>
                </div>
                <div id="Contact_right_column">
                    <div id="Contact_right_image"><img src={right_image} alt="rightImage" width="250px" height="250px" /></div>
                    <p id="Contact_right_text">
                        鄭謹譯
                        <br />
                        B06901180
                    </p>
                </div>
                <Link to="/Team" id="Contact_link"><button id="Contact_team_btn">History Team</button></Link>
            </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

export default Contact;
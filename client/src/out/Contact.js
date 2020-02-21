import React, { Component } from 'react';
import './Contact.css';
import eesa_icon from '../images/eesa-icon.png';
import left_image from '../images/left_image.png';
import right_image from '../images/right_image.png';
import { NavBar } from '../component/AppBar';
import Footer from "../component/Footer";
class Contact extends Component{
    render(){
        return (
        <div id="Contact_container">
            <NavBar/>
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
            <footer id="index_footer"><Footer/></footer>
        </div>
        )
    }
}

export default Contact;
import React, { Component } from 'react';
import './Support.css';
import { NavBar } from '../component/AppBar';
import Footer from "../component/Footer/Footer";
class Support extends Component{
    render(){
        return (
        <div>
        <div id="Support_container" class="col-8 offset-2 col-md-6 offset-md-3">
        <NavBar/> 
            <div id="Support_up">
                <h3 id="Support_up_text" >
                    Your support is vital in enabling NTUEE+ to fulfill
                    our mission to chain all the alumnae in the world.
                </h3>
            </div>
            <div id="Support_down">
                <p id="Support_down_text">
                    帳戶:700-0001236-0553850
                    <br />
                    備註:NTUEE-PLUS
                </p>
            </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

export default Support;

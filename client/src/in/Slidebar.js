import React, { Component } from 'react';
import "./Slidebar.css"
import arrow_right from "../images/arrow_right.png";
import arrow_left  from "../images/arrow_left.png";
//import Footer from "../component/Footer"
import LoginChange from "./LoginChange";
import VisualChange from "./VisualChange";
import Scrollbars from "react-custom-scrollbars";
//import Scrollbar from 'react-scrollbars-custom';
//import {NavBar_in} from '../component/AppBar_in';

class Slidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicktime:0
        }

        this.slideopen = this.slideopen.bind(this);
        this.slideclose = this.slideclose.bind(this);
        this.createSlideBtn = this.createSlideBtn.bind(this);
    
    }
    createSlideBtn(type){
        let new_btn = document.createElement('button')
        let new_icon = document.createElement('img')
        new_btn.setAttribute('class','Slidebar_btn');
        new_icon.setAttribute('class','Slidebar_png');
        if (type==="open"){
            new_btn.setAttribute('id','Slidebar_btn_open');
            new_btn.onclick = this.slideopen;
            new_icon.setAttribute('src',arrow_right);
            new_icon.setAttribute('alt','arrow_right');
            new_btn.appendChild(new_icon)
            new_btn.style.left = "1vw";

        }else{
            new_btn.setAttribute('id','Slidebar_btn_close');
            new_btn.onclick = this.slideclose;
            new_icon.setAttribute('src',arrow_left);
            new_icon.setAttribute('alt','arrow_left');
            new_btn.appendChild(new_icon)
            new_btn.style.left = "52vw";
        }
        return new_btn
    }
    slideopen(e){
        e.preventDefault();
        console.log("open");
        let slidebtn_parent = document.getElementById("Slidebar_container");
        let slidebtn = document.getElementById("Slidebar_btn_open");
        let closebtn = this.createSlideBtn("close")
        slidebtn_parent.style.left = "0vw";
        slidebtn_parent.style.transitionProperty = "left";
        slidebtn_parent.style.transitionDuration = "0.5s"
        slidebtn.style.left = "52vw"
        slidebtn.style.transitionProperty = "left";
        slidebtn.style.transitionDuration = "0.5s"
        setTimeout(()=>{
            slidebtn_parent.replaceChild(closebtn,slidebtn);
        },500)
        
    }
    slideclose(e){
        e.preventDefault();
        console.log("close");
        let slidebtn_parent = document.getElementById("Slidebar_container");
        let slidebtn = document.getElementById("Slidebar_btn_close");
        let openbtn = this.createSlideBtn('open')
        
        slidebtn_parent.style.left = "-55vw";
        slidebtn_parent.style.transitionProperty = "left";
        slidebtn_parent.style.transitionDuration = "0.5s"
        slidebtn.style.left = "1vw";
        slidebtn.style.transitionProperty = "left";
        slidebtn.style.transitionDuration = "0.5s";
        setTimeout(()=>{
            slidebtn_parent.replaceChild(openbtn,slidebtn);
        },500)
        
    }
    render(){
            const renderThumb = ({ style, ...props }) => {
                const thumbStyle = {
                borderRadius: 6,
                backgroundColor: 'rgba(192,192,200, 0.5)'
                };
                return <div style={{ ...style, ...thumbStyle }} {...props} />;
            }
        return(
            <div id="Slidebar_container">
                <button className="Slidebar_btn" id = "Slidebar_btn_open" onClick={this.slideopen}>
                    <img className="Slidebar_png" src={arrow_right} alt="arrow_right" />
                </button>
                <div id="Slidebar_main">
                    <Scrollbars renderThumbVertical={renderThumb}>
                        <VisualChange class="Slidebar_main"/>
                        <LoginChange  class="Slidebar_main"/>
                    </Scrollbars>
                </div>
        </div>
        )
        
        
        
    }
}

export default Slidebar;

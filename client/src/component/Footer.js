import React from 'react';
import eesa from '../images/eesa-icon.png';
import "./Footer.css"
const Footer = () => {
    return (
      <div id = "Footer_div">
        <img id = "Footer_img" src = {eesa}></img>
        <p id="Footer_text">聯絡信箱:ntueesa@gmail.com<br/>
        &nbsp;台灣大學電機工程學系 系學會</p>
      </div>
    );
  };
  export default Footer;
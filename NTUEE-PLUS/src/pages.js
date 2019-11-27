// /src/pages.js
import React from 'react'
import Home from "./Home"
import Login from "./Login"
import Support from "./Support"
import About from "./About"
import Contact from "./Contact"

const Home_page = () =>{
    return <Home/>;
};
const Login_page = () =>{
    return <Login/>;
};
const Support_page = () =>{
    return <Support/>;
};
const About_page = () =>{
    return <About/>;
};
const Contact_page = () =>{
    return <Contact/>;
};

export { Home_page,Login_page, Support_page,About_page ,Contact_page };
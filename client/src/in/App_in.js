import React, {Component} from "react";
import {Route} from "react-router-dom";
import { NavBar_in } from "../component/AppBar_in";
import {Home_in_page,Column_page,Career_page,Study_page,Search_page,Upload_image_page} from "./pages_in"
// import {PrivateRoute} from '../component/PrivateRoute';


class App_in extends Component{
    render(){
        return(
            <div className="container">
                <NavBar_in/>
                    <Route path="/Home_in" exact component = {Home_in_page} />
                    <Route path="/Column" component = {Column_page} />
                    <Route path="/Career" component = {Career_page} />
                    <Route path="/Study" component = {Study_page} />
					<Route path="/Search" component = {Search_page} />
                    {/* <PrivateRoute exact path="/Home_in" component = {Home_in_page}></PrivateRoute>
                    <PrivateRoute path="/Column" component = {Column_page}></PrivateRoute>
                    <PrivateRoute path="/Career" component = {Career_page}></PrivateRoute>
                    <PrivateRoute path="/Study" component = {Study_page}></PrivateRoute>
                    <PrivateRoute path="/Search" component = {Search_page}></PrivateRoute>
                    <PrivateRoute path="/Uploadimage" component={Upload_image_page}></PrivateRoute> */}
            </div>
        );
    }
}

export default App_in;
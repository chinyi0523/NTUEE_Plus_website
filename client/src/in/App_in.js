import React, {Component} from "react";
import {Route} from "react-router-dom";
//import {Home_in_page} from "./pages_in"
import { NavBar_in } from "../component/AppBar_in";
import Column from "./column";
import Home_in from "./Home_in";

class App_in extends Component{
    render(){
        return(
            <div className="container">
                <NavBar_in/>
                    <Route path="/Home_in" exact component = {Home_in} />
                    <Route path="/Column" component = {Column} />
            </div>
        );
    }
}

export default App_in;
import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import {Route,Switch} from "react-router-dom";
import { Home_in_page, Column_page} from "./pages_in";
import "./Main_in.css";
import {NavBar_in} from "../component/AppBar_in";
class Main_in extends Component{
    render(){
        return(
            <div>
                <NavBar_in/>
                <Switch>
                    <Route path="/in/Home_in" component={Home_in_page} />
                    <Route path="/in/Column" component={Column_page} />
                </Switch>
            </div>
        )
    }
}

export default Main_in;
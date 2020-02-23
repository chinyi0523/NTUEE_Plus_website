import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import {Route,Switch, Redirect} from "react-router-dom";
import { Home_in_page, Column_page, Recruit_study_page} from "./pages_in";
import {column_app} from "./column_text/column_app";
//import { column_1910_page,column_main_page } from "./column_text/column_pages"
import "./Main_in.css";
import {NavBar_in} from "../component/AppBar_in";
import Column from './column';
class Main_in extends Component{
    render(){
        return(
            <div>
                <NavBar_in/>
                <Switch>
                    <Route path="/in/Home_in" exact component={Home_in_page} />
                    <Route path="/in/Column"  exact component={Column_page} />
                    <Route path="/in/Column/pages" component = {column_app}/>
                    <Route path="/in/Recruit_study"  exact component={Recruit_study_page} />
                </Switch>
            </div>
        )
    }
}

export default Main_in;
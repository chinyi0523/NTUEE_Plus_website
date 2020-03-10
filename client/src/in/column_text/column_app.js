import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import {column_1912_page} from "./column_pages";
import {column_1910_page} from "./column_pages";
import {column_1909_page} from "./column_pages";
import {column_1908_page} from "./column_pages";
import {column_1907_page} from "./column_pages";
import {column_陳維超_page} from "./column_pages";
import {column_楊奕軒_page} from "./column_pages";
import {column_陳俊仰_page} from "./column_pages";
import {column_黃柏源_page} from "./column_pages";
import {column_胡立民_page} from "./column_pages";

class column_app extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/in/Column/pages/1912" exact component={column_1912_page}/>
                    <Route path="/in/Column/pages/1910" exact component={column_1910_page}/>
                    <Route path="/in/Column/pages/1909" exact component={column_1909_page}/>
                    <Route path="/in/Column/pages/1908" exact component={column_1908_page}/>
                    <Route path="/in/Column/pages/1907" exact component={column_1907_page}/>
                    <Route path="/in/Column/pages/陳維超" exact component={column_陳維超_page}/>
                    <Route path="/in/Column/pages/楊奕軒" exact component={column_楊奕軒_page}/>
                    <Route path="/in/Column/pages/陳俊仰" exact component={column_陳俊仰_page}/>
                    <Route path="/in/Column/pages/黃柏源" exact component={column_黃柏源_page}/>
                    <Route path="/in/Column/pages/胡立民" exact component={column_胡立民_page}/>
                </Switch>
            </div>
        )
}
}

export {column_app};
import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import {Register_account_page} from "./register_pages";

class register_app extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/Register/pages/Register_account" exact component={Register_account_page}/>
                </Switch>
            </div>
        )
}
}

export {register_app};
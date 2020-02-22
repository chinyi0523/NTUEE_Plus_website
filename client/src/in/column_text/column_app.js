import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import {column_1910_page} from "./column_pages";

class column_app extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/in/Column/pages/1910" exact component={column_1910_page}/>
                </Switch>
            </div>
        )
}
}

export {column_app};
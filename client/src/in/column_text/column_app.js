import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import {column_2001_page} from "./column_pages";
import {column_1912_page} from "./column_pages";
import {column_1910_page} from "./column_pages";
import {column_1909_page} from "./column_pages";
import {column_1908_page} from "./column_pages";
import {column_1907_page} from "./column_pages";
import {column_1808_page} from "./column_pages";
import {column_1807_page} from "./column_pages";
import {column_1806_page} from "./column_pages";
import {column_1805_page} from "./column_pages";
import {column_胡立民_page} from "./column_pages";
import {column_洪銘駿_page} from "./column_pages";
import {column_王英明_page} from "./column_pages";
import {column_梁維仁_page} from "./column_pages";
import {column_高奕豪_page} from "./column_pages";
import {column_1606_page} from "./column_pages";
import {column_胡一天_page} from "./column_pages";
import {column_徐瑞廷_page} from "./column_pages";
import {column_趙式隆_page} from "./column_pages";

class column_app extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/in/Column/pages/2001" exact component={column_2001_page}/>
                    <Route path="/in/Column/pages/1912" exact component={column_1912_page}/>
                    <Route path="/in/Column/pages/1910" exact component={column_1910_page}/>
                    <Route path="/in/Column/pages/1909" exact component={column_1909_page}/>
                    <Route path="/in/Column/pages/1908" exact component={column_1908_page}/>
                    <Route path="/in/Column/pages/1907" exact component={column_1907_page}/>
                    <Route path="/in/Column/pages/1808" exact component={column_1808_page}/>
                    <Route path="/in/Column/pages/1807" exact component={column_1807_page}/>
                    <Route path="/in/Column/pages/1806" exact component={column_1806_page}/>
                    <Route path="/in/Column/pages/1805" exact component={column_1805_page}/>
                    <Route path="/in/Column/pages/胡立民" exact component={column_胡立民_page}/>
                    <Route path="/in/Column/pages/洪銘駿" exact component={column_洪銘駿_page}/>
                    <Route path="/in/Column/pages/王英明" exact component={column_王英明_page}/>
                    <Route path="/in/Column/pages/梁維仁" exact component={column_梁維仁_page}/>
                    <Route path="/in/Column/pages/高奕豪" exact component={column_高奕豪_page}/>
                    <Route path="/in/Column/pages/1606" exact component={column_1606_page}/>
                    <Route path="/in/Column/pages/胡一天" exact component={column_胡一天_page}/>
                    <Route path="/in/Column/pages/徐瑞廷" exact component={column_徐瑞廷_page}/>
                    <Route path="/in/Column/pages/趙式隆" exact component={column_趙式隆_page}/>
                </Switch>
            </div>
        )
}
}

export {column_app};
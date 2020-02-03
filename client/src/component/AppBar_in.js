import React from "react";
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import './AppBar_in.css';
import Logout from '../in/Logout'

const NavBar_in = () =>{
    return(
        <div id = "AppBar_in_root">
            <AppBar id= "AppBar_in_Bar">
                <Toolbar>
                    <div id="AppBar_in_Logo"><Link to="/Home_in"><Logo /></Link></div>
                    <div id = "AppBar_in_space"></div>
                    <div id = "AppBar_in_menu">
                        <Link id = "AppBar_in_Link" to="/?"><Button id = "AppBar_in_menuButton">Working...</Button></Link>
                        <Link id = "AppBar_in_Link" to="/Column"><Button id="AppBar_in_menuButton">Column</Button></Link>
                        <Link id = "AppBar_in_Link"><Logout id="AppBar_in_menuButton"/></Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export {NavBar_in};
import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return(
        <div className="header">
            <div className="bottom-header">
                <div className="container">
                    <div className="header-bottom-left">
                        <div className="logo">
                            <NavLink to="/">Pizza Shop</NavLink>
                        </div>
                        <div className="clearfix"/>
                    </div>
                    <div className="header-bottom-right">
                        <div className="account"><NavLink to="/login"><span> </span>YOUR ACCOUNT</NavLink></div>
                        <ul className="login">
                            <li><NavLink to="/login"><span> </span>LOGIN</NavLink></li>
                            |
                            <li><NavLink to="/register">SIGNUP</NavLink></li>
                        </ul>
                        <div className="cart"><NavLink to="/cart"><span> </span>CART</NavLink></div>
                        <div className="clearfix"/>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import {NavLink} from 'react-router-dom'
import CartTop from "./CartTop";


export const Navbar = () => {
    return(
        <div className="container">
            <div className="bottom-header row align-items-center">
                    <div className="header-bottom-left col-6">
                        <div className="logo">
                            <NavLink to="/">Pizza Shop</NavLink>
                        </div>
                    </div>
                    <div className="header-bottom-right col-6 row">
                        <div className="account col-5"><NavLink to="/login"><span> </span>YOUR ACCOUNT</NavLink></div>
                        <ul className="login col-4">
                            <li><NavLink to="/login"><span> </span>LOGIN</NavLink></li>
                             &nbsp;|&nbsp;
                            <li><NavLink to="/register">SIGNUP</NavLink></li>
                        </ul>
                        <CartTop/>
                    </div>
            </div>
        </div>
    )
}

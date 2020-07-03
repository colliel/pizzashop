import React from "react";
import {NavLink} from 'react-router-dom'

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
                        <div className="account col"><NavLink to="/login"><span> </span>YOUR ACCOUNT</NavLink></div>
                        <ul className="login col">
                            <li><NavLink to="/login"><span> </span>LOGIN</NavLink></li>
                            |
                            <li><NavLink to="/register">SIGNUP</NavLink></li>
                        </ul>
                        <div className="cart col"><NavLink to="/cart"><span> </span>CART</NavLink></div>
                    </div>
            </div>
        </div>
    )
}
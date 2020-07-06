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
                    <div className="header-bottom-right col-6 row justify-content-end">
                        <div className="account col-5"><NavLink to="/myOrders"><span> </span>YOUR ACCOUNT</NavLink></div>
                        <CartTop/>
                    </div>
            </div>
        </div>
    )
}

import React from "react";
import {NavLink} from "react-router-dom";

export const CartTop = () => {
    return(
        <div className="cart col-3">
            <NavLink to="/cart"><span> </span>CART</NavLink>
        </div>
    )
}
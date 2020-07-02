import React from "react";
import {NavLink} from "react-router-dom";

export const Item = ({good}) => {
    return(
        <div className="col">
            <NavLink to="/good/:"><img className="chain" src="../images/ch.jpg" alt=" "/></NavLink>
            <div className="grid-chain-bottom">
                <h6><NavLink to="/good/:">{good.name}</NavLink></h6>
                <div className="star-price row">
                    <div className="col-4">
                        <span className="actual">{good.price} $</span>
                    </div>
                    <div className="col-8">
                        <a className="now-get get-cart" href="#">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
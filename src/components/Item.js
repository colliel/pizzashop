import React from "react";
import {NavLink} from "react-router-dom";

export const Item = ({item}) => {
    return(
        <div className="col mb-5">
            <NavLink to={`/good/${item.hashId}`}><img className="chain" src={`./pizza/${item.name}.jpg`} alt={item.name}/></NavLink>
            <div className="grid-chain-bottom">
                <h6><NavLink to={`/good/${item.hashId}`}>{item.name}</NavLink></h6>
                <div className="star-price row">
                    <div className="col-4">
                        <span className="actual">{item.price} $</span>
                    </div>
                    <div className="col-8">
                        <a className="now-get get-cart" href="#">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
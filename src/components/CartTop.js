import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"

const CartTop = ({cart}) => {
    return(
        <div className="cart col-3">
            <NavLink to="/cart">
                <span> </span>
                CART
                {cart.length &&
                    cart.reduce(function(sum, current){
                        return sum + current.quantity
                    }, 0)
                }
            </NavLink>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.goods.cart
    }
}

export default connect(mapStateToProps)(CartTop)
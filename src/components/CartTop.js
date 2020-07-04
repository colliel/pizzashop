import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import {fetchCart} from "../state/actions";

const CartTop = ({cart, fetchCart}) => {
    const userId = 1

    useEffect(() => {
        fetchCart(userId)
    }, [])

    return(
        <div className="cart col-3">
            <NavLink to="/cart">
                <span> </span>
                CART
                {!!cart.length &&
                    <strong>&nbsp;(
                        {cart.reduce(function (sum, current) {
                            return sum + current.quantity
                        }, 0)}
                    )</strong>
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

const mapDispatchToProps = dispatch => ({
    fetchCart: userId => dispatch(fetchCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartTop)
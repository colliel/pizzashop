import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import {fetchCart, getUserFromCookies} from "../state/actions";

const CartTop = ({userId, cart, fetchCart, getUserFromCookies}) => {

    useEffect(() => {
        getUserFromCookies().then(fetchCart(userId))
        console.log(userId)
    }, [userId])

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
        cart: state.goods.cart,
        userId: state.app.user
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCart: userId => dispatch(fetchCart(userId)),
    getUserFromCookies: () => dispatch(getUserFromCookies())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartTop)
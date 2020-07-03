import React from "react";
import {connect} from "react-redux";

const Cart = ({cart}) => {
    return(
        <div className="col-9">
            {!cart.length ? <p>Your cart is empty</p> : cart.length}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.goods.cart
    }
}

export default connect(mapStateToProps)(Cart)
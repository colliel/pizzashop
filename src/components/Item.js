import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {checkCart} from "../state/actions";

const Item = ({item, cart, handleAddToCart}) => {
    const userId = 1
    return(
        <div className="col mb-5">
            <NavLink to={`/good/${item.hashId}`}><img className="chain" src={`./pizza/${item.name}.jpg`} alt={item.name}/></NavLink>
            <div className="grid-chain-bottom">
                <h6><NavLink to={`/good/${item.hashId}`}>{item.name}</NavLink></h6>
                <div className="star-price row align-items-center">
                    <div className="col-4">
                        <span className="actual">{item.price} $</span>
                    </div>
                    <div className="col-8">
                        <button
                            className="now-get get-cart"
                            onClick={() => handleAddToCart(item.hashId, userId)}
                        >ADD TO CART</button>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.goods.cart
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddToCart: (hashId, userId) => dispatch(checkCart(hashId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
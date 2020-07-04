import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCart} from "../state/actions"
import {Loader} from "../components/Loader";
import {CartItem} from "../components/CartItem";

const Cart = ({cart, loading, fetchCart}) => {
    const userId = 1

    useEffect(() => {
        fetchCart(userId)
    }, [])

    return(
        <div className="col-9">
            {loading ? <Loader/> :
                <>
                    <h1>Cart</h1>
                    {!cart.length ? <p>Your cart is empty</p> :
                        <ul className="list-group">
                            {cart.map(i => <CartItem key={i.id} item={i}/>)}
                        </ul>
                    }
                </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.goods.cart,
        loading: state.app.loading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCart: userId => dispatch(fetchCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
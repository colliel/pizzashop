import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCart, getUserFromCookies} from "../state/actions"
import {Loader} from "../components/Loader";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = ({cart, loading, fetchCart, getUserFromCookies}) => {

    useEffect(() => {
        getUserFromCookies().then(userId => fetchCart(userId))
        // eslint-disable-next-line
    }, [])

    return(
        <div className="col mt-3">
            {loading ? <Loader/> :
                <>
                    <h1>Cart</h1>
                    {!cart.length ? <p>Your cart is empty</p> :
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col"><span role="img" aria-label="pizza">🍕</span></th>
                                <th scope="col">Name</th>
                                <th scope="col">Price $</th>
                                <th scope="col">Quantity</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                                {cart.map(i => <CartItem key={i.id} item={i}/>)}
                                <CartTotal cart={cart}/>

                            </tbody>
                        </table>
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
    fetchCart: userId => dispatch(fetchCart(userId)),
    getUserFromCookies: () => dispatch(getUserFromCookies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
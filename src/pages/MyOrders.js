import React, {useEffect} from "react";
import {Loader} from "../components/Loader";
import {fetchOrders, getUserFromCookies} from "../state/actions";
import {connect} from "react-redux";
import {MyOrdersItem} from "../components/MyOrdersItem"

const MyOrders = ({loading, orders, fetchOrders, getUserFromCookies}) => {
    useEffect(() => {
        getUserFromCookies().then(userId => fetchOrders(userId))
        // eslint-disable-next-line
    }, [])
    return(
        <div className="col-9 mt-3">
            {loading ? <Loader/> :
                <>
                    <h1>My Orders</h1>
                    {!!orders.length ?
                        <ul className="list-group">
                            {orders.map(i => <MyOrdersItem key={i.time} order={i}/>)}
                        </ul>
                        : <p>You have no orders</p>
                    }
                </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.goods.orders,
        loading: state.app.loading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOrders: userId => dispatch(fetchOrders(userId)),
    getUserFromCookies: () => dispatch(getUserFromCookies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
import React, {useEffect} from "react";
import {Loader} from "../components/Loader";
import {fetchOrders} from "../state/actions";
import {connect} from "react-redux";
import {MyOrdersItem} from "../components/MyOrdersItem"

const MyOrders = ({userId, loading, orders, fetchOrders}) => {
    useEffect(() => {
        fetchOrders(userId)
    }, [])
    return(
        <div className="col-9">
            {loading ? <Loader/> :
                <>
                    <h1>My Orders</h1>
                    <ul className="list-group">
                        {orders.map(i => <MyOrdersItem key={i.id} order={i}/>)}
                    </ul>
                </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.app.user,
        orders: state.goods.orders,
        loading: state.app.loading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOrders: userId => dispatch(fetchOrders(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
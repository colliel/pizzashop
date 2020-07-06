import React from "react";

export const MyOrdersItem = ({order}) => {
    function timestampToDate(ts) {
        let d = new Date();
        d.setTime(ts);
        return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear() + '   ' + ('0' + d.getHours()).slice(-2) + '.' + ('0' + d.getMinutes()).slice(-2);
    }

    return(
        <li className="list-group-item">
            <p><strong>{timestampToDate(order.time)}</strong></p>
            <p>Name: {order.name}, </p>
            <p>Address: {order.address},</p>
            <p>Items: </p>
            <div className="items">
            {Object.keys(order.cart).map(i => <p>Product: {order.cart[i].name}, Price: {order.cart[i].price}, Quantity: {order.cart[i].quantity}</p>)}
            </div>
        </li>
    )
}
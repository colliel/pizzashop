import React from "react";

export const MyOrdersItem = ({order}) => {
    return(
        <li className="list-group-item">
            <p>Name: {order.name}, </p>
            <p>Address: {order.address},</p>
            <hr/>
            <p>Items: </p>
            {/*{Object.keys(order.cart).map(i => order.cart[i]).reduce((sum, current) => {
                return sum + "Product: " + current.name + ", Price: " + current.price + ", Quantity: " + current.quantity + "\n"
        }, "")}*/}
            {Object.keys(order.cart).map(i => <p>Product: {order.cart[i].name}, Price: {order.cart[i].price}, Quantity: {order.cart[i].quantity}</p>)}
        </li>
    )
}
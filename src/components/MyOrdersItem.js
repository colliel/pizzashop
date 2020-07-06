import React from "react";

export const MyOrdersItem = ({order}) => {
    return(
        <li className="list-group-item">
            Name: {order.name}, Address: {order.address},
            Items: {order.cart.reduce((sum, current) => {
                return sum + current
        })}
        </li>
    )
}
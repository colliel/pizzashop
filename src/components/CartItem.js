import React from "react";

export const CartItem = ({item}) => {
    return(
        <li className="list-group-item">{item.name} - {item.price} - {item.quantity}</li>
    )
}
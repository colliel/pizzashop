import React from "react";
import {connect} from "react-redux"
import {deleteFromCart, changeQuantity, getUserFromCookies} from "../state/actions";

const CartItem = ({item, handleDeleteGood, handlePlus, handleMinus, getUserFromCookies}) => {

    return(
        <tr>
            <td><img className="cartPic" src={`../pizza/${item.name}.jpg`} alt={item.name}/></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                {item.quantity}
                &nbsp;
                <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => getUserFromCookies().then(userId => handlePlus(userId, item.hashId, item.quantity))}
                >&uarr;</button>
                &nbsp;
                <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => getUserFromCookies().then(userId => handleMinus(userId, item.hashId, item.quantity))}
                >&darr;</button>
            </td>
            <td>
                <button
                className="btn btn-danger"
                onClick={() => getUserFromCookies().then(userId => handleDeleteGood(userId, item.hashId))}
            >Delete</button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserFromCookies: () => dispatch(getUserFromCookies()),
    handleDeleteGood: (userId, hashId) => dispatch(deleteFromCart(userId, hashId)),
    handlePlus: (userId, hashId, quantity) => dispatch(changeQuantity(userId, hashId, quantity, 'plus')),
    handleMinus: (userId, hashId, quantity) => dispatch(changeQuantity(userId, hashId, quantity, 'minus'))
})

export default connect(null, mapDispatchToProps)(CartItem)
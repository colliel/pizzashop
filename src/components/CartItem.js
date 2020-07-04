import React from "react";
import {connect} from "react-redux"
import {deleteFromCart, changeQuantity} from "../state/actions";

const CartItem = ({item, handleDeleteGood, handlePlus, handleMinus}) => {
    const userId = 1
    return(
        <tr>
            <td><img className="cartPic" src={`../pizza/${item.name}.jpg`} alt={item.name}/></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                {item.quantity}
                &nbsp;
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handlePlus(userId, item.hashId, item.quantity)}
                >&uarr;</button>
                &nbsp;
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleMinus(userId, item.hashId, item.quantity)}
                >&darr;</button>
            </td>
            <td>
                <button
                className="btn btn-danger"
                onClick={() => handleDeleteGood(userId, item.hashId)}
            >Delete</button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    handleDeleteGood: (userId, hashId) => dispatch(deleteFromCart(userId, hashId)),
    handlePlus: (userId, hashId, quantity) => dispatch(changeQuantity(userId, hashId, quantity, 'plus')),
    handleMinus: (userId, hashId, quantity) => dispatch(changeQuantity(userId, hashId, quantity, 'minus'))
})

export default connect(null, mapDispatchToProps)(CartItem)
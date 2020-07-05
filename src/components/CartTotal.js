import React, {useEffect} from "react";
import {convertToEuro} from "../state/actions";
import {connect} from "react-redux";

const CartTotal = ({cart, convertToEuro}) => {
    useEffect(() => {
        convertToEuro()
    }, [])

    return(
        <tr>
            <td>
            </td>
            <td>
            </td>
            <td colSpan="3">
                Total amount: $
                {cart.reduce((sum, current) => {
                    return sum + current.quantity * current.price
                }, 0)}
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    convertToEuro: () => dispatch(convertToEuro())
})

export default connect(null, mapDispatchToProps)(CartTotal)
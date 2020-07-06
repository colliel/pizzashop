import React, {useEffect} from "react";
import {convertToEuro} from "../state/actions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const CartTotal = ({cart, convertToEuro, euroAmount}) => {

    const totalAmount = cart.reduce((sum, current) => {
        return sum + current.quantity * current.price
    }, 0)

    useEffect(() => {
        convertToEuro(totalAmount)
        console.log(totalAmount)
    }, [totalAmount])

    return(
        <tr>
            <td/>
            <td/>
            <td colSpan="2">
                Total amount: $ {totalAmount} (€ {euroAmount})
            </td>
            <td>
                <NavLink to="/Order" className="btn btn-primary">Order</NavLink>
            </td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {
        euroAmount: state.goods.euroAmount
    }
}

const mapDispatchToProps = dispatch => ({
    convertToEuro: totalAmount => dispatch(convertToEuro(totalAmount))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal)
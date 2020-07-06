import React, {useEffect} from "react";
import {convertToEuro} from "../state/actions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const CartTotal = ({cart, convertToEuro, euroAmount}) => {
    const deliveryCost = 8

    const totalAmount = cart.reduce((sum, current) => {
        return sum + current.quantity * current.price
    }, 0)

    const totalAmountWithDelivery = totalAmount + deliveryCost

    useEffect(() => {
        convertToEuro(totalAmount, deliveryCost, totalAmountWithDelivery)
        console.log(totalAmount)
    }, [totalAmount])

    return(
        <tr>

            <td colSpan="2">
                <p>Total amount: $ {totalAmount} (€ {euroAmount[0]})</p>
                <p>Delivery cost: $ {deliveryCost} (€ {euroAmount[1]})</p>
                <p>Total amount with delivery: $ {totalAmountWithDelivery} (€ {euroAmount[2]})</p>
            </td>
            <td/>
            <td/>
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

const mapDispatchToProps = {
    convertToEuro
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal)
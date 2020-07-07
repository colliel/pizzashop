import React, {useEffect} from "react";
import {calculateTotalAmount} from "../state/actions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const CartTotal = ({cart, calculateTotalAmount, totalAmount}) => {

    useEffect(() => {
        calculateTotalAmount(cart)
        // eslint-disable-next-line
    }, [cart])

    return(
        <tr>

            <td colSpan="2">
                <p>Total amount: $ {totalAmount[0]} (€ {totalAmount[3]})</p>
                <p>Delivery cost: $ {totalAmount[1]} (€ {totalAmount[4]})</p>
                <p>Total amount with delivery: $ {totalAmount[2]} (€ {totalAmount[5]})</p>
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
        totalAmount: state.goods.totalAmount
    }
}

const mapDispatchToProps = {
    calculateTotalAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal)
import React, {useEffect} from "react";
import {convertToEuro} from "../state/actions";
import {connect} from "react-redux";

const CartTotal = ({cart, convertToEuro, euroAmount}) => {
    useEffect(() => {
        convertToEuro(totalAmount)
    }, [])

    const totalAmount = cart.reduce((sum, current) => {
        return sum + current.quantity * current.price
    }, 0)

    return(
        <tr>
            <td>
            </td>
            <td>
            </td>
            <td colSpan="3">
                Total amount: $ {totalAmount}
                <br/>
                € {euroAmount}
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
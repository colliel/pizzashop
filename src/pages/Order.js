import React, {useState} from "react";
import {connect} from "react-redux";
import {fetchOrder} from "../state/actions"

const Order = (props) => {
    const [input, setInput] = useState({name: '', address: ''})

    const onInputChange = event => {
        event.persist()
        setInput(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newOrder = {
            name: input.name,
            address: input.address,
            cart: props.cart
        }
        props.fetchOrder(newOrder)
    }

    return (
        <>
            <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="InputName">Your name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="InputName"
                        aria-describedby="emailHelp"
                        value={input.name || ''}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="InputAddress">Your address</label>
                    <textarea
                        name="address"
                        className="form-control"
                        id="InputAddress"
                        value={input.address || ''}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Order</button>
                {props.errorLogin && <p className="error">Error: {props.errorLogin}</p>}
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.goods.cart
    }
}

const mapDispatchToProps = {
    fetchOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
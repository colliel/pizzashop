import React, {useState} from "react";
import {connect} from "react-redux";
import {fetchOrder, getUserFromCookies} from "../state/actions"
import {Error} from "../components/Error";

const Order = (props) => {
    const [input, setInput] = useState({name: '', address: ''})
    const [error, setError] = useState('')

    const onInputChange = event => {
        event.persist()
        setInput(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newOrder = {
            time: Date.now().toString(),
            name: input.name,
            address: input.address,
            cart: props.cart,
            totalAmount: props.totalAmount
        }
        if (newOrder.name === '' || newOrder.address === '') {
            setError('You must fill in all fields')
        } else {
            props.getUserFromCookies()
                .then(userId => props.fetchOrder(newOrder, userId))
                .then(() => props.history.push('/myOrders/'))
        }
    }

    return (
        <div className="col-6 mt-3">
            <form className="form-group" onSubmit={handleSubmit}>
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
                {!!error && <Error error={error}/>}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.goods.cart,
        totalAmount: state.goods.totalAmount
    }
}

const mapDispatchToProps = {
    fetchOrder, getUserFromCookies
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
import {
    FETCH_GOODS,
    FETCH_GOOD,
    SHOW_LOADER,
    HIDE_LOADER,
    ADD_TO_CART,
    FETCH_CART,
    UPDATE_CART,
    DELETE_FROM_CART,
    CHANGE_QUANTITY,
    TOTAL_AMOUNT,
    CLEAR_CART,
    FETCH_ORDER,
    FETCH_ORDERS
} from './types'
import Cookies from 'js-cookie'

const url = process.env.REACT_APP_BD_URL

export const fetchGoods = () => {
    return (dispatch) => {
        dispatch({type: SHOW_LOADER})
        return fetch(`${url}/goods.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => Object.keys(data).map(item => {
                return {...data[item], hashId: item}
            }))
            .then(arr => {
                return dispatch({type: FETCH_GOODS, payload: arr})
            })
            .then(() => dispatch({type: HIDE_LOADER}))
    }
}

export const fetchGood = (hashId) => {
    return (dispatch) => {
        dispatch({type: SHOW_LOADER})
        return fetch(`${url}/goods/${hashId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {return {...data, hashId}})
            .then(data => dispatch({type: FETCH_GOOD, payload: data}))
            .then(() => dispatch({type: HIDE_LOADER}))
    }
}

export const fetchGoodData = (goodId, userId) => {
    return (dispatch) => {
        return fetch(`${url}/goods/${goodId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {return {name: data.name, price: data.price, goodId, userId}})
            .then(content => dispatch(addToCartWithGoodData(content)))
    }
}

export const addToCartWithGoodData = (content) => {
    return dispatch => {
        const obj = {
            id: content.goodId,
            quantity: 1,
            name: content.name,
            price: content.price
        }
        return fetch(`${url}/users/${content.userId}/cart.json`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => data.name)
            .then(name => dispatch({type: ADD_TO_CART, payload: {
                ...obj, hashId: name
                }}))
    }
}

export const checkCart = (goodId, userId) => {
    return dispatch => {
        return fetch(`${url}/users/${userId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                if (data.cart) {
                    const found = Object.keys(data.cart).find(item => data.cart[item].id === goodId)
                    if (found) {
                        return dispatch(updateCart(userId, found, data.cart[found].quantity, goodId))
                    } else return dispatch(fetchGoodData(goodId, userId))
                } else return dispatch(fetchGoodData(goodId, userId))
            })
    }
}

export const updateCart = (userId, hashId, quantity, goodId) => {
    return dispatch => {
        return fetch(`${url}/users/${userId}/cart/${hashId}.json`,{
            method: 'PATCH',
            body: JSON.stringify({
                quantity: quantity + 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            dispatch({type: UPDATE_CART, payload: {quantity: quantity + 1, hashId}})
        })
    }
}

export const fetchCart = (userId) => {
    return dispatch => {
        dispatch({type: SHOW_LOADER})
        return fetch(`${url}/users/${userId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                if (data.cart) {
                    return Object.keys(data.cart).map(item => {
                        return {...data.cart[item], hashId: item}
                    })
                } else {
                    return []
                }
            })
            .then(arr => dispatch({type: FETCH_CART, payload: arr}))
            .then(() => dispatch({type: HIDE_LOADER}))
    }
}

export const deleteFromCart = (userId, hashId) => {
    return dispatch => {
        return fetch(`${url}/users/${userId}/cart/${hashId}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => dispatch({type: DELETE_FROM_CART, payload: hashId}))

    }
}

export const changeQuantity = (userId, hashId, quantity, type) => {
    return dispatch => {
        quantity = (type === 'plus') ? quantity + 1 : (quantity === 1) ? quantity : quantity - 1
        return fetch(`${url}/users/${userId}/cart/${hashId}.json`, {
            method: 'PATCH',
            body: JSON.stringify({
                quantity
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => dispatch({type: CHANGE_QUANTITY, payload: {hashId, quantity, type}}))
    }
}

export const calculateTotalAmount = (cart) => {
    return dispatch => {
        const deliveryCost = 8
        const totalAmount = cart.reduce((sum, current) => {
            return sum + current.quantity * current.price
        }, 0)
        const totalAmountWithDelivery = totalAmount + deliveryCost
        return fetch(`https://cors-anywhere.herokuapp.com/https://currate.ru/api/?get=rates&pairs=EURUSD&key=17f005c683055051eb5df2855d055f7f`, {
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                const rate = data.data.EURUSD
                return [totalAmount,
                    deliveryCost,
                    totalAmountWithDelivery,
                    Math.round(totalAmount * rate),
                    Math.round(deliveryCost * rate),
                    Math.round(totalAmountWithDelivery * rate)]
            })
            .then(arr => {
                return dispatch({type: TOTAL_AMOUNT, payload: arr})
            })
    }
}

export const getUserFromCookies = () => {
    return async dispatch => {
        const hashId = await Cookies.get('hashId')
        if (hashId){
            return hashId
        } else {
            const idToken = Math.random().toString(36).substr(2);
            const hashId = await dispatch(addRegisteredToDB(idToken))
            await Cookies.set('hashId', hashId, {expires: 10})
            return hashId
        }
    }
}

export const addRegisteredToDB = idToken => {
    return () => {
        return fetch(`${url}/users.json`, {
            method: 'POST',
            body: JSON.stringify({
                idToken
            }),
            headers: {
                'Content_type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => data.name)
    }
}

export const fetchOrder = (newOrder, userId) => {
    return dispatch => {
        return fetch(`${url}/users/${userId}/orders.json`, {
            method: 'POST',
            body: JSON.stringify({...newOrder}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => dispatch({type: FETCH_ORDER, payload: newOrder}))
            .then(() => dispatch(clearCart(userId)))
    }
}

export const clearCart = userId => {
    return dispatch => {
        return fetch(`${url}/users/${userId}/cart.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => dispatch({type: CLEAR_CART}))
    }
}

export const fetchOrders = userId => {
    return dispatch => {
        dispatch({type: SHOW_LOADER})
        return fetch(`${url}/users/${userId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                if (data.orders) {
                    return dispatch({type: FETCH_ORDERS, payload: Object
                            .keys(data.orders)
                            .map(i => {
                                return {...data.orders[i], id: i}
                            })})
                }
            }).then(() => dispatch({type: HIDE_LOADER}))
    }
}
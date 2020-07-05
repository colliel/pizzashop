import {
    FETCH_GOODS,
    FETCH_GOOD,
    SHOW_LOADER,
    HIDE_LOADER,
    ADD_TO_CART,
    FETCH_CART,
    UPDATE_CART,
    DELETE_FROM_CART,
    CHANGE_QUANTITY
} from './types'

const url = process.env.REACT_APP_BD_URL

const apiKey = 'AIzaSyCh3ScfjZQd23KVcyyAbmDdrBqo_bKLpEU'

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
        console.log(quantity)
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
                    console.log(data)
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

export const convertToEuro = () => {
    return dispatch => {
        return fetch(`http://data.fixer.io/api/latest?access_key=4685ea0ed311231bb583550d38ff0dab&symbols=EUR,USD`, {
            method: 'GET',
/*            headers: {
                'Content-Type': 'application/json'
            }*/
        }).then(response => response.json())
            .then(data => console.log(data))
    }
}
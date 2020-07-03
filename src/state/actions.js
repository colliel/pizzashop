import {FETCH_GOODS, FETCH_GOOD, SHOW_LOADER, HIDE_LOADER, ADD_TO_CART} from './types'

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
                console.log(data)
                return {...data[item], hashId: item}
            }))
            .then(arr => {
                console.log(arr)
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

export const addToCart = (goodId, userId) => {
    return dispatch => {
        const obj = {
            id: goodId,
            quantity: 1
        }
        return fetch(`${url}/users/${userId}/cart.json`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(() => dispatch({type: ADD_TO_CART, payload: obj}))
    }
}
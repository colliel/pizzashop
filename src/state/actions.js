import {FETCH_GOODS, FETCH_GOOD, SHOW_LOADER, HIDE_LOADER} from './types'

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
            .then(arr => dispatch({type: FETCH_GOODS, payload: arr}))
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
            .then(data => dispatch({type: FETCH_GOOD, payload: data}))
            .then(() => dispatch({type: HIDE_LOADER}))
    }
}
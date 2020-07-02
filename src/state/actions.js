import {FETCH_GOODS, SHOW_LOADER, HIDE_LOADER} from './types'

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
            .then(data => {
                console.log(data)
                Object.keys(data).map(item => data[item])
            })
            .then(arr => {
                dispatch({type: FETCH_GOODS, payload: arr})
            })
            .then(() => dispatch({type: HIDE_LOADER}))
    }
}
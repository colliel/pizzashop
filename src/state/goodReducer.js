import {FETCH_GOODS, FETCH_GOOD, ADD_TO_CART} from "./types";

const initialState = {
    goods: [],
    good: {},
    cart: []
}

export const goodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOODS:
            return state = {...state, goods: action.payload}
        case FETCH_GOOD:
            return state = {...state, good: action.payload}
        case ADD_TO_CART:
            return state = {...state, cart: [...state.cart, action.payload]}
        default:
            return state
    }
}
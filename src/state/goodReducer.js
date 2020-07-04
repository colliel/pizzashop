import {FETCH_GOODS, FETCH_GOOD, ADD_TO_CART, FETCH_CART, UPDATE_CART} from "./types";

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
        case UPDATE_CART:
            const found = state.cart.findIndex(i => i.hashId === action.payload.hashId)
            const newObject = {name: state.cart[found].name, price: state.cart[found].price}
            const newCart = state.cart.filter(i => i.id !== action.payload.id)
            newCart.push({...action.payload, ...newObject})
            console.log(found)
            return state = {...state,
                cart: newCart
            }
        case FETCH_CART:
            return state = {...state, cart: action.payload}
        default:
            return state
    }
}
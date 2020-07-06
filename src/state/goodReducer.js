import {
    FETCH_GOODS,
    FETCH_GOOD,
    ADD_TO_CART,
    FETCH_CART,
    UPDATE_CART,
    DELETE_FROM_CART,
    CHANGE_QUANTITY,
    EURO_AMOUNT,
    CLEAR_CART,
    FETCH_ORDER,
    FETCH_ORDERS
} from "./types";

const initialState = {
    goods: [],
    good: {},
    cart: [],
    euroAmount: [],
    order: {},
    orders: []
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
            return state = {...state,
                cart: state.cart.map(i => (i.hashId === action.payload.hashId) ?
                    {...i, quantity: action.payload.quantity} : i)}
        case FETCH_CART:
            return state = {...state, cart: action.payload}
        case DELETE_FROM_CART:
            return state = {...state, cart: state.cart.filter(i => i.hashId !== action.payload)}
        case CHANGE_QUANTITY:
            return state = {...state,
                cart: state.cart.map(i => (i.hashId === action.payload.hashId) ?
                    {...i, quantity: action.payload.quantity} : i)}
        case EURO_AMOUNT:
            return state = {...state, euroAmount: action.payload}
        case CLEAR_CART:
            return  state = {...state, cart: []}
        case FETCH_ORDER:
            return state = {...state, order: action.payload}
        case FETCH_ORDERS:
            return state = {...state, orders: action.payload}
        default:
            return state
    }
}
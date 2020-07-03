import {FETCH_GOODS, FETCH_GOOD} from "./types";

const initialState = {
    goods: [],
    good: {}
}

export const goodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOODS:
            return state = {...state, goods: action.payload}
        case FETCH_GOOD:
            return state = {...state, good: action.payload}
        default:
            return state
    }
}
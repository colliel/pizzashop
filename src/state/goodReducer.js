import {FETCH_GOODS} from "./types";

const initialState = {
    goods: []
}

export const goodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOODS:
            return state = {...state, goods: action.payload}
        default:
            return state
    }
}
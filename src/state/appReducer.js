import {SHOW_LOADER, HIDE_LOADER} from "./types"

const initialState = {
    loading: false,
    user: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return state = {...state, loading: true}
        case HIDE_LOADER:
            return state = {...state, loading: false}
        default:
            return state
    }
}
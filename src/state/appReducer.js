import {SHOW_LOADER, HIDE_LOADER, PROCESS_USER_DATA} from "./types"

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
        case PROCESS_USER_DATA:
            return state = {...state, user: action.payload}
        default:
            return state
    }
}
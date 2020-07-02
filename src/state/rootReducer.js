import {combineReducers} from "redux";
import {goodReducer} from "./goodReducer"
import {appReducer} from "./appReducer";

export default combineReducers({
    app: appReducer,
    goods: goodReducer
})
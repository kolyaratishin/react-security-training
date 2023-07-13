import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import userReducer from "./user-reducer";
import errorReducer from "./error-reducer";

let reducers = combineReducers({
    user: userReducer,
    errors: errorReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
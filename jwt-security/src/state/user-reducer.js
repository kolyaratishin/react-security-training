import {authApi} from "../api/api";
import {setLoginError} from "./error-reducer";

const SET_CURRENT_USER = "SET_CURRENT_USER"

const emptyUser = {
    username: "",
    role: "",
    isAuth: false
}
let initialState = {
    currentUser: emptyUser
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {...state, currentUser: {...action.user}}
        }
        default:
            return state;
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        authApi.login(username, password)
            .then((response) => {
                dispatch(setCurrentUser({...response.data, isAuth: true}))
            })
            .catch(error => {
                debugger
                dispatch(setLoginError(error.message));
            });
    };
}


export const setCurrentUser = (user) => {
    return {type: SET_CURRENT_USER, user};
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setCurrentUser(emptyUser));
    };
}

export default userReducer;
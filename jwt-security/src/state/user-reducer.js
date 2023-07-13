import {authApi, userApi} from "../api/api";
import {setLoginError} from "./error-reducer";

const SET_CURRENT_USER = "SET_CURRENT_USER"
const SET_USER_LIST = "SET_USER_LIST"

const emptyUser = {
    username: "",
    role: "",
    isAuth: false
}
let initialState = {
    currentUser: emptyUser,
    usersList: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {...state, currentUser: {...action.user}}
        }
        case SET_USER_LIST: {
            return {...state, usersList: [...action.users]}
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
                dispatch(setLoginError(error.message));
            });
    };
}

export const getAllUsers = () => {
    return (dispatch) => {
        userApi.getAllUsers()
            .then((response) => {
                dispatch(setUsersList(response.data))
            })
    };
}

export const setUsersList = (users) => {
    return {type: SET_USER_LIST, users};
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
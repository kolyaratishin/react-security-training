const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";


let initialState = {
    loginError: false,
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_ERROR:{
            return {...state, loginError: action.showError}
        }
        default:
            return state;
    }
}

export const setLoginError = (showError) => {
    return {type: SET_LOGIN_ERROR, showError};
}

export default errorReducer;
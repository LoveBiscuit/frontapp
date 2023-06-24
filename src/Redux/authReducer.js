import { authAPI } from "../API/API";

const SET_USER_DATA = '/frontapp/auth/SET_USER_DATA';
const SET_AUTH_ERROR = '/frontapp/auth/SET_AUTH_ERROR';
const RESET_USER_DATA = '/frontapp/auth/RESET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    authError: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.error
            }
        case RESET_USER_DATA:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            }
        default:
            return state;
    }
};

// Action Creator

export const setAuthUserData = (id, email, login) => ({ type: '/frontapp/auth/SET_USER_DATA', payload: { id, email, login } })
export const setAuthError = (error) => ({ type: '/frontapp/auth/SET_AUTH_ERROR', error })
export const resetAuthUserData = () => ({ type: '/frontapp/auth/RESET_USER_DATA' })

// Thunk Creator

export const userAuth = () => {
    return async (dispatch) => {
        let respone = await authAPI.getAuth();

        if (respone.resultCode === 0) {
            let { id, email, login } = respone.data;
            dispatch(setAuthUserData(id, email, login));
        } else {
            console.warn('Вы не авторизированы...');
        }
    }
}

export const userLogin = (loginData) => {
    return async (dispatch) => {
        let response = await authAPI.userLogin(loginData);
        if (response.resultCode === 0) {
            dispatch(userAuth());
            dispatch(setAuthError(''));
            console.log('Success user login!');
        } else {
            dispatch(setAuthError(response));
            console.error('Authorization failure:', response.messages);
        }
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        let response = await authAPI.userLogout({});
        if (response.resultCode === 0) {
            dispatch(resetAuthUserData())
            console.log('User logout!');
        } else {
            // dispatch(setAuthError(res));
            console.error('Logout failure:', response.messages);
        }
    }
}

export default authReducer;
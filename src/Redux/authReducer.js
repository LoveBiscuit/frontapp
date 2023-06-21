import { authAPI } from "../API/API";

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
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case 'SET_AUTH_ERROR':
            return {
                ...state,
                authError: action.error
            }
        case 'RESET_USER_DATA':
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

export const setAuthUserData = (id, email, login) => ({ type: 'SET_USER_DATA', payload: { id, email, login } })
export const setAuthError = (error) => ({ type: 'SET_AUTH_ERROR', error })
export const resetAuthUserData = () => ({ type: 'RESET_USER_DATA' })

// Thunk Creator

export const userAuth = () => {
    return (dispatch) => {
        return authAPI.getAuth()
            .then(res => {
                if (res.resultCode === 0) {
                    let { id, email, login } = res.data;
                    dispatch(setAuthUserData(id, email, login));
                } else {
                    console.warn('Вы не авторизированы...');
                }
            })
    }
}

export const userLogin = (loginData) => {
    return (dispatch) => {
        authAPI.userLogin(loginData)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(userAuth());
                    dispatch(setAuthError(''));
                    console.log('Success user login!');
                } else {
                    dispatch(setAuthError(res));
                    console.error('Authorization failure:', res.messages);
                }
            })
    }
}

export const userLogout = () => {
    return (dispatch) => {
        authAPI.userLogout({})
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(resetAuthUserData())
                    console.log('User logout!');
                } else {
                    // dispatch(setAuthError(res));
                    console.error('Logout failure:', res.messages);
                }
            })
    }
}

export default authReducer;
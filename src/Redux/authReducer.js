import { authAPI } from "../API/API";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

// Action Creator

export const setAuthUserData = (id, email, login) => ({type: 'SET_USER_DATA', data: {id, email, login}})

// Thunk Creator

export const userAuth = () => {
    return (dispatch) => {
        authAPI.getAuth()
        .then((res) => {
            if (res.resultCode === 0) {
                let { id, email, login } = res.data;
                dispatch(setAuthUserData(id, email, login))
            } else {
                console.error('oops...');
            }
        })
    }
}

export default authReducer;
import { userAuth } from "./authReducer";

const SET_INITIALIZED = '/frontapp/app/SET_INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case 'NULL':
            return {

            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({ type: '/frontapp/app/SET_INITIALIZED' });

export const appInitializer = () => {
    return async (dispatch) => {
        try {
            await dispatch(userAuth());
            dispatch(initializedSuccess());
        } catch (error) {
            console.error('У тебя проблемы, дружок:', error);
        }
    }
}

export default appReducer;
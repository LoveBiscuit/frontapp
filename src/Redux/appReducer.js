import { userAuth } from "./authReducer";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
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

export const initializedSuccess = () => ({type: 'SET_INITIALIZED'});

export const appInitializer = () => {
    return (dispatch) => {
        let promise = dispatch(userAuth());
        promise.then(() => dispatch(initializedSuccess()))
    }
}

export default appReducer;
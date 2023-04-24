import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducer } from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsList: friendsReducer
})

const store = configureStore({reducer: rootReducer});

export default store;
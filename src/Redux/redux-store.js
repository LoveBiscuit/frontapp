import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    friendsList: friendsReducer,
    auth: authReducer
})

const store = configureStore({reducer: rootReducer});

export default store;
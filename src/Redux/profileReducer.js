import { profileAPI } from "../API/API";

const SET_USER_PROFILE = '/frontapp/profile/SET_USER_PROFILE';
const SET_USER_STATUS = '/frontapp/profile/SET_USER_STATUS';
const ADD_POST = '/frontapp/profile/ADD_POST';
const DELETE_POST = '/frontapp/profile/DELETE_POST';


let initialState = {
    userProfile: null,
    userStatus: '',
    postsData: [
        { id: 1, post: 'Это моё первое сообщение!', likesCount: 0 },
        { id: 2, post: 'Вау! А это второе!', likesCount: 0 },
        { id: 3, post: 'hmmm...', likesCount: 0 },
        { id: 4, post: 'It\'s my first message!', likesCount: 0 }
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: { ...action.userProfile }
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, post: action.text, likesCount: 0 }]
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(el => el.id !== action.postID)
            }
        default:
            return state;
    }
};

// Action Creator

export const setUserProfile = (userProfile) => ({ type: '/frontapp/profile/SET_USER_PROFILE', userProfile });
export const setUserStatus = (userStatus) => ({ type: '/frontapp/profile/SET_USER_STATUS', userStatus });
export const addPost = (text) => ({ type: '/frontapp/profile/ADD_POST', text });
export const deletePost = (postID) => ({ type: '/frontapp/profile/DELETE_POST', postID })

// Thunk Creator

export const getProfile = (profileID, authID) => {
    return async (dispatch) => {
        let userID = !profileID ? authID : profileID;

        let response = await profileAPI.getProfile(userID);

        dispatch(setUserProfile(response));
    }
}

export const getStatus = (profileID, authID) => {
    return async (dispatch) => {
        let userID = !profileID ? authID : profileID;

        let response = await profileAPI.getStatus(userID);

        if (response === null) {
            dispatch(setUserStatus('Нет статуса'));
        } else {
            dispatch(setUserStatus(response));
        }
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        if (status.length > 0) {
            let response = await profileAPI.updateStatus(status);

            if (response.resultCode === 0) {
                dispatch(setUserStatus(status));
            } else {
                console.error('Ошибка прилетела с сервера');
            }
        } else {
            return console.error('Поле статуса не может быть пустым :(');
        }
    }
}

export default profileReducer;
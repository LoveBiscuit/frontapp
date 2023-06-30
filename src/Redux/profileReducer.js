import { profileAPI } from "../API/API";

const SET_USER_PROFILE = '/frontapp/profile/SET_USER_PROFILE';
const SET_USER_STATUS = '/frontapp/profile/SET_USER_STATUS';
const ADD_POST = '/frontapp/profile/ADD_POST';
const DELETE_POST = '/frontapp/profile/DELETE_POST';
const SAVE_AVATAR_SUCCESS = '/frontapp/profile/SAVE_AVATAR_SUCCESS';
const SAVE_PROFILE_SUCCESS = '/frontapp/profile/SAVE_PROFILE_SUCCESS';

let initialState = {
    userProfile: null,
    userStatus: '',
    postsData: [
        { id: 1, post: 'Это моё первое сообщение!', likesCount: 0 },
        { id: 2, post: 'Вау! А это второе!', likesCount: 0 },
        { id: 3, post: 'hmmm...', likesCount: 0 },
        { id: 4, post: 'It\'s my first message!', likesCount: 0 }
    ],
    contactsError: ''
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
        case SAVE_AVATAR_SUCCESS:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos.photos }
            }
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    fullName: action.data.fullName,
                    aboutMe: action.data.aboutMe,
                    contacts: action.data.contacts,
                    lookingForAJob: action.data.lookingForAJob,
                    lookingForAJobDescription: action.data.lookingForAJobDescription
                }
            }
        default:
            return state;
    }
};

// Action Creator
export const setUserProfile = (userProfile) => ({ type: '/frontapp/profile/SET_USER_PROFILE', userProfile });
export const setUserStatus = (userStatus) => ({ type: '/frontapp/profile/SET_USER_STATUS', userStatus });
export const addPost = (text) => ({ type: '/frontapp/profile/ADD_POST', text });
export const deletePost = (postID) => ({ type: '/frontapp/profile/DELETE_POST', postID });
export const saveAvatarSuccess = (photos) => ({ type: '/frontapp/profile/SAVE_AVATAR_SUCCESS', photos });
export const saveProfileSuccess = (data) => ({ type: '/frontapp/profile/SAVE_PROFILE_SUCCESS', data });

// Thunk Creator
export const getProfile = (profileID) => {
    return async (dispatch, getState) => {
        const id = profileID ? profileID : getState().auth.id;
        const response = await profileAPI.getProfile(id);

        dispatch(setUserProfile(response));
    }
}

export const getStatus = (profileID) => {
    return async (dispatch, getState) => {
        const id = profileID ? profileID : getState().auth.id;
        try {
            const response = await profileAPI.getStatus(id);

            if (response === null) {
                dispatch(setUserStatus('Нет статуса'));
            } else {
                dispatch(setUserStatus(response));
            }
        } catch (error) {
            console.error('У тебя проблемы, дружок:', error);
        }
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        if (status.length > 0) {
            try {
                let response = await profileAPI.updateStatus(status);

                if (response.resultCode === 0) {
                    dispatch(setUserStatus(status));
                } else {
                    console.error('Ошибка прилетела с сервера');
                }
            } catch (error) {
                console.error('У тебя проблемы, дружок:', error);
            }
        } else {
            return console.error('Поле статуса не может быть пустым :(');
        }
    }
}

export const updateAvatar = (file) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.updateAvatar(file);

            if (response.resultCode === 0) {
                console.log('photo changed');
                console.log(response.data);
                dispatch(saveAvatarSuccess(response.data))
            } else {
                console.error(response.messages);
            }
        } catch (error) {
            console.error('У тебя проблемы, дружок:', error);
        }
    }
}

export const updateProfile = (data) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.updateProfile(data);
            if (response.resultCode === 0) {
                console.log('успешный успех');
                dispatch(saveProfileSuccess(data));
            } else {
                return Promise.reject(response.messages);
            }
        } catch (error) {
            console.error('У тебя проблемы, дружок:', error);
        }
    }
}



export default profileReducer;
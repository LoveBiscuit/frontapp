import { profileAPI } from "../API/API";

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
        case 'SET_USER_PROFILE':
            return {
                ...state,
                userProfile: { ...action.userProfile }
            }
        case 'SET_USER_STATUS':
            return {
                ...state,
                userStatus: action.userStatus
            }
        case 'ADD-POST':
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, post: action.text, likesCount: 0 }],
                postTextarea: ''
            }
        default:
            return state;
    }
};

// Action Creator

export const setUserProfile = (userProfile) => ({ type: 'SET_USER_PROFILE', userProfile });
export const setUserStatus = (userStatus) => ({ type: 'SET_USER_STATUS', userStatus });
export const addPost = (text) => ({ type: 'ADD-POST', text });

// Thunk Creator

export const getProfile = (profileID, authID) => {
    return (dispatch) => {
        let userID = !profileID ? authID : profileID;

        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (profileID, authID) => {
    return (dispatch) => {
        let userID = !profileID ? authID : profileID;

        profileAPI.getStatus(userID)
            .then(data => {
                if (data === null) {
                    dispatch(setUserStatus('Нет статуса'));
                } else {
                    dispatch(setUserStatus(data));
                }
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        if (status.length > 0) {
            profileAPI.updateStatus(status)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setUserStatus(status));
                    } else {
                        console.error('Ошибка прилетела с сервера');
                    }
                });
        } else {
            return console.error('Поле статуса не может быть пустым :(');
        }
    }
}

export default profileReducer;
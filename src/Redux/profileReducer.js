import { profileAPI } from "../API/API";

let initialState = {
    userProfile: null,
    postsData: [
        { id: 1, post: 'Это моё первое сообщение!', likesCount: 0 },
        { id: 2, post: 'Вау! А это второе!', likesCount: 0 },
        { id: 3, post: 'hmmm...', likesCount: 0 },
        { id: 4, post: 'It\'s my first message!', likesCount: 0 }
    ],
    postTextarea: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return {
                ...state,
                userProfile: {...action.userProfile}
            }
        case 'ADD-POST':
            let text = state.postTextarea;

            if (text.length >= 3) {
                return {
                    ...state,
                    postsData: [...state.postsData, { id: 5, post: text, likesCount: 0 }],
                    postTextarea: ''
                }
            } return {
                ...state,
                postTextarea: state.postTextarea
            }
            
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                postTextarea: action.value
            }
        default:
            return state;
    }
};

// Action Creator

export const setUserProfile = (userProfile) => ({ type: 'SET_USER_PROFILE', userProfile})
export const addPost = () => ({ type: 'ADD-POST' });
export const updateNewPostText = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', value: text });

// Thunk Creator

export const getProfile = (profileID, authID) => {
    return (dispatch) => {
        let userID = !profileID ? 2 : profileID;

        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;
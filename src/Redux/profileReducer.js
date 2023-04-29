let initialState = {
    postsData: [
        { id: 1, post: 'Это моё первое сообщение!', likesCount: 4 },
        { id: 2, post: 'Вау! А это второе!', likesCount: 11 },
        { id: 3, post: 'hmmm...', likesCount: 8 },
        { id: 4, post: 'It\'s my first message!', likesCount: 5 }
    ],
    postTextarea: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let text = state.postTextarea;

            return {
                ...state,
                postsData: text.length > 0 ? [...state.postsData, { id: 5, post: text, likesCount: 0 }] : [...state.postsData],
                postTextarea: ''
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

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', value: text });

export default profileReducer;
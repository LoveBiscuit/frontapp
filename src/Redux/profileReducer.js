let initialState = {
    postsData: [
        { id: 1, post: 'Это моё первое сообщение!', likesCount: 4 },
        { id: 2, post: 'Вау! А это второе!', likesCount: 11 },
        { id: 3, post: 'hmmm...', likesCount: 8 },
        { id: 4, post: 'It\'s my first message!', likesCount: 5 }
    ],
    postTextarea: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                post: state.postTextarea,
                likesCount: 0
            }

            if (state.postTextarea !== '' && state.postTextarea.length > 2) {
                state.postsData.push(newPost);
                state.postTextarea = '';
            }
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.postTextarea = action.value;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) =>  ({ type: 'UPDATE-NEW-POST-TEXT', value: text });

export default profileReducer;
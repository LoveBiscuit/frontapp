const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            }

            if (state.newPostText !== '' && state.newPostText.length > 2) {
                state.postsData.push(newPost);
                state.newPostText = '';
            }
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.value;
            break;
        default:
            break;
    }

    return state;
};

export default profileReducer;
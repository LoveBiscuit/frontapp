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
    let newState = {...state};
    newState.postsData = [...state.postsData];

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                post: newState.postTextarea,
                likesCount: 0
            }

            if (newState.postTextarea !== '' && newState.postTextarea.length > 0) {
                newState.postsData.push(newPost);
                newState.postTextarea = '';
            }
            return newState;
        case 'UPDATE-NEW-POST-TEXT':
            newState.postTextarea = action.value;
            return newState;
        default:
            return newState;
    }
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) =>  ({ type: 'UPDATE-NEW-POST-TEXT', value: text });

export default profileReducer;
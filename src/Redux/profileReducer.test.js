import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    postsData: [
        { id: 1, post: 'Это моё первое сообщение!', likesCount: 0 },
        { id: 2, post: 'Вау! А это второе!', likesCount: 0 },
        { id: 3, post: 'hmmm...', likesCount: 0 },
        { id: 4, post: 'It\'s my first message!', likesCount: 0 }
    ]
};

test('postsData length should be 5', () => {
    // 1. test data
    let action = addPost('my new message, yay!');

    // 2. test action
    let newState = profileReducer(state, action);

    // 3. test expectation
    expect(newState.postsData.length).toBe(5);
});

test('message should be added', () => {
    // 1. test data
    let action = addPost('my new message, yay!');

    // 2. test action
    let newState = profileReducer(state, action);

    // 3. test expectation
    expect(newState.postsData[4].post).toBe('my new message, yay!');
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(2);

    // 2. test action
    let newState = profileReducer(state, action);

    // 3. test expectation
    expect(newState.postsData.length).toBe(3); 
});

test('after deleting shouldn\'t be decrement if ID is incorrect', () => {
    // 1. test data
    let action = deletePost(2);

    // 2. test action
    let newState = profileReducer(state, action);

    // 3. test expectation
    expect(newState.postsData.length).toBe(3);
});
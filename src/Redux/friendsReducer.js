let initialState = {
    friendsData: [
        { id: 1, name: 'Евгений' },
        { id: 2, name: 'Дмитрий' },
        { id: 3, name: 'Саша' },
        { id: 4, name: 'Максим' },
        { id: 5, name: 'Богдан' }
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
};

export default friendsReducer;
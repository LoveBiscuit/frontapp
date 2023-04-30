let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        default:
            return state;
    }
};

export const setUsersActionCreator = (users) => ({ type: 'SET_USERS', users });
export const followActionCreator = (userID) => ({ type: 'FOLLOW', userID });
export const unfollowActionCreator = (userID) => ({ type: 'UNFOLLOW', userID });

export default usersReducer;
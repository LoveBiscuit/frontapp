let initialState = {
    users: [
        { id: 1, fullName: 'Adam', status: 'Живём-живём!', followed: true, location: { country: 'Montenegro', city: 'Herceg-Novi' } },
        { id: 2, fullName: 'Nastya', status: 'Жизнь прекрасна, как никогда!', followed: false, location: { country: 'Russia', city: 'Moscow' } },
        { id: 3, fullName: 'Julia', status: 'Увлекаюсь историей и чем-то ещё', followed: true, location: { country: 'Ukraine', city: 'Kyiv' } },
        { id: 4, fullName: 'Evgeny', status: 'На работе...', followed: true, location: { country: 'Kazakhstan', city: 'Astana' } },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, action.users]
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
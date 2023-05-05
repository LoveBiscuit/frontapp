let initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users,
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_FETCHING_STATUS':
            return {
                ...state,
                isFetching: action.fetchStatus
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
export const setTotalUsersCountActionCreator = (totalCount) => ({ type: 'SET_TOTAL_USERS_COUNT', totalCount });
export const setCurrentPageActionCreator = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setFetchingStatusActionCreator = (fetchStatus) => ({ type: 'SET_FETCHING_STATUS', fetchStatus})
export const followActionCreator = (userID) => ({ type: 'FOLLOW', userID });
export const unfollowActionCreator = (userID) => ({ type: 'UNFOLLOW', userID });

export default usersReducer;
import { usersAPI } from "../API/API";

let initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    buttonInProgress: []
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
        case 'SET_BUTTON_STATUS':
            return {
                ...state,
                buttonInProgress: action.buttonStatus
                    ? [...state.buttonInProgress, action.userID]
                    : state.buttonInProgress.filter(id => id !== action.userID)
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

// Action Creators

export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const setTotalUsersCount = (totalCount) => ({ type: 'SET_TOTAL_USERS_COUNT', totalCount });
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setFetchingStatus = (fetchStatus) => ({ type: 'SET_FETCHING_STATUS', fetchStatus });
export const setButtonStatus = (buttonStatus, userID) => ({ type: 'SET_BUTTON_STATUS', buttonStatus, userID })
export const followSuccess = (userID) => ({ type: 'FOLLOW', userID });
export const unfollowSuccess = (userID) => ({ type: 'UNFOLLOW', userID });

// Thunk Creators

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetchingStatus(true));

        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));

                dispatch(setFetchingStatus(false));
            });
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setButtonStatus(true, userID));

        usersAPI.userFollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                } else {
                    console.error(data);
                }

                dispatch(setButtonStatus(false, userID));
            })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setButtonStatus(true, userID));

        usersAPI.userUnfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }

                dispatch(setButtonStatus(false, userID));
            })
    }
}

export default usersReducer;
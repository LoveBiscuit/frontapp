import { usersAPI } from "../API/API";
// import { updateObjectInArray } from "../Utils/objMapper";

const SET_USERS = '/frontapp/users/SET_USERS';
const SET_TOTAL_USERS_COUNT = '/frontapp/users/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = '/frontapp/users/SET_CURRENT_PAGE';
const SET_FETCHING_STATUS = '/frontapp/users/SET_FETCHING_STATUS';
const SET_BUTTON_STATUS = '/frontapp/users/SET_BUTTON_STATUS';
const FOLLOW = '/frontapp/users/FOLLOW';
const UNFOLLOW = '/frontapp/users/UNFOLLOW';

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
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.fetchStatus
            }
        case SET_BUTTON_STATUS:
            return {
                ...state,
                buttonInProgress: action.buttonStatus
                    ? [...state.buttonInProgress, action.userID]
                    : state.buttonInProgress.filter(id => id !== action.userID)
            }
        case FOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userID, { followed: true })
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
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

export const setUsers = (users) => ({ type: '/frontapp/users/SET_USERS', users });
export const setTotalUsersCount = (totalCount) => ({ type: '/frontapp/users/SET_TOTAL_USERS_COUNT', totalCount });
export const setCurrentPage = (currentPage) => ({ type: '/frontapp/users/SET_CURRENT_PAGE', currentPage });
export const setFetchingStatus = (fetchStatus) => ({ type: '/frontapp/users/SET_FETCHING_STATUS', fetchStatus });
export const setButtonStatus = (buttonStatus, userID) => ({ type: '/frontapp/users/SET_BUTTON_STATUS', buttonStatus, userID })
export const followSuccess = (userID) => ({ type: '/frontapp/users/FOLLOW', userID });
export const unfollowSuccess = (userID) => ({ type: '/frontapp/users/UNFOLLOW', userID });

// Thunk Creators

const toggleFollowUnfollow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(setButtonStatus(true, userID));

    let response = await apiMethod;
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    } else {
        console.error(response);
    }
    dispatch(setButtonStatus(false, userID));
}

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setFetchingStatus(true));
        dispatch(setCurrentPage(currentPage));

        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setFetchingStatus(false));
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        toggleFollowUnfollow(dispatch, userID, usersAPI.userFollow(userID), followSuccess)
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        toggleFollowUnfollow(dispatch, userID, usersAPI.userUnfollow(userID), unfollowSuccess)
    }
}

export default usersReducer;
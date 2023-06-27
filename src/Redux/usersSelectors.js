import { createSelector } from "reselect";

const getUsersFromState = (state) => {
    return state.usersPage.users;
}

export const getUsersFromStateSuper = createSelector(getUsersFromState, (users) => {
    return users.filter(u => true);
});

export const getPageSizeFromState = (state) => {
    return state.usersPage.pageSize;
}

export const getCurrentPageFromState = (state) => {
    return state.usersPage.currentPage;
}

export const getPortionSizeFromState = (state) => {
    return state.usersPage.portionSize;
}

export const getTotalUsersCountFromState = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getIsFetchingFromState = (state) => {
    return state.usersPage.isFetching;
}

export const getButtonInProgressFromState = (state) => {
    return state.usersPage.buttonInProgress;
}
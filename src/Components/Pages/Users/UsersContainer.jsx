/* eslint-disable jsx-a11y/alt-text */
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../../Redux/usersReducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        follow: (userID) => dispatch(followActionCreator(userID)),
        unfollow: (userID) => dispatch(unfollowActionCreator(userID))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
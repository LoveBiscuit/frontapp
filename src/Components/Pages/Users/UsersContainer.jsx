/* eslint-disable jsx-a11y/alt-text */
import { followActionCreator, unfollowActionCreator } from '../../../Redux/usersReducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => dispatch(followActionCreator(userID)),
        unfollow: (userID) => dispatch(unfollowActionCreator(userID))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
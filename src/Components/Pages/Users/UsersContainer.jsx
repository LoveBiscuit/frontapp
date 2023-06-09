/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { getUsers, follow, unfollow } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';

// UsersAPIComponent

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    render() {
        if (this.props.isFetching === false) {
            return (
                <Users
                    {...this.props}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    changePage={this.props.getUsers}
                />
            )
        } else {
            return (
                <Preloader />
            )
        }
    }
}

// UsersContainer

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        buttonInProgress: state.usersPage.buttonInProgress
    }
}

export default connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
})(UsersContainer);
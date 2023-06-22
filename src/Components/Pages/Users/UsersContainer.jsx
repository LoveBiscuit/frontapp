/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { getUsers, follow, unfollow } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
// import withAuthRedirect from '../../../HOC/withAuthRedirect';
import { compose } from '@reduxjs/toolkit';
import { getButtonInProgressFromState, getCurrentPageFromState, getIsFetchingFromState, getPageSizeFromState, getTotalUsersCountFromState, getUsersFromState, getUsersFromStateSuper } from '../../../Redux/usersSelectors';

// UsersAPIComponent

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    render() {
        console.log('users rendered');
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

function mapStateToProps(state) {
    console.log('users state changed');
    return {
        users: getUsersFromStateSuper(state),
        pageSize: getPageSizeFromState(state),
        currentPage: getCurrentPageFromState(state),
        totalUsersCount: getTotalUsersCountFromState(state),
        isFetching: getIsFetchingFromState(state),
        buttonInProgress: getButtonInProgressFromState(state)
    }
}

const mapDispatchToProps = {
    getUsers,
    follow,
    unfollow
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(UsersContainer);
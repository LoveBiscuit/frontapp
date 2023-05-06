/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { followActionCreator, setCurrentPageActionCreator, setFetchingStatusActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';

// UsersAPIComponent

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);

                this.props.setFetching(false);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);

        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);

                this.props.setFetching(false);
            });
    };

    render() {
        if (this.props.isFetching === false) {
            return (
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    isFetching={this.props.isFetching}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountActionCreator(totalCount)),
        setPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
        setFetching: (fetchStatus) => dispatch(setFetchingStatusActionCreator(fetchStatus)),
        follow: (userID) => dispatch(followActionCreator(userID)),
        unfollow: (userID) => dispatch(unfollowActionCreator(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
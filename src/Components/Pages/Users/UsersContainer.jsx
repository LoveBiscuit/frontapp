/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';

// UsersAPIComponent

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    };

    render() {
        return (<Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
        />
        );
    }
}

// UsersContainer

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountActionCreator(totalCount)),
        setPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
        follow: (userID) => dispatch(followActionCreator(userID)),
        unfollow: (userID) => dispatch(unfollowActionCreator(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
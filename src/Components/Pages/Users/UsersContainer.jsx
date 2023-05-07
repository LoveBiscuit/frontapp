/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { follow, setCurrentPage, setFetchingStatus, setTotalUsersCount, setUsers, unfollow } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';

// UsersAPIComponent

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetchingStatus(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);

                this.props.setFetchingStatus(false);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setFetchingStatus(true);

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);

                this.props.setFetchingStatus(false);
            });
    };

    render() {
        if (this.props.isFetching === false) {
            return (
                <Users
                    {...this.props}
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

export default connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setFetchingStatus,
    follow,
    unfollow
})(UsersContainer);
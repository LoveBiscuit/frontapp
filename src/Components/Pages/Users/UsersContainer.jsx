/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { follow, setCurrentPage, setFetchingStatus, setTotalUsersCount, setUsers, unfollow, getUsersThunkCreator } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
import { usersAPI } from '../../../API/API';
import { setButtonStatus } from './../../../Redux/usersReducer';

// UsersAPIComponent

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

        // this.props.setFetchingStatus(true);

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);

        //         this.props.setFetchingStatus(false);
        //     });
    };

    onPageChanged = (pageNumber) => {
        this.props.setFetchingStatus(true);

        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);

                this.props.setFetchingStatus(false);
            });
    };

    followToServer = (userID) => {
        this.props.setButtonStatus(true, userID);

        usersAPI.userFollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userID)
                } else {
                    console.error(data);
                }

                this.props.setButtonStatus(false, userID);
            })
    }

    unfollowToServer = (userID) => {
        this.props.setButtonStatus(true, userID);

        usersAPI.userUnfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(userID)
                }

                this.props.setButtonStatus(false, userID);
            })
    }

    render() {
        if (this.props.isFetching === false) {
            return (
                <Users
                    {...this.props}
                    followToServer={this.followToServer}
                    unfollowToServer={this.unfollowToServer}
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
        isFetching: state.usersPage.isFetching,
        buttonInProgress: state.usersPage.buttonInProgress
    }
}

export default connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setFetchingStatus,
    setButtonStatus,
    follow,
    unfollow,
    getUsersThunkCreator
})(UsersContainer);
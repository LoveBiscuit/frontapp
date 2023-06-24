/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addPost, setUserProfile, setUserStatus, getProfile, getStatus, updateStatus } from './../../../Redux/profileReducer';
import Profile from './Profile';
import withAuthRedirect from '../../../HOC/withAuthRedirect';
import withRouter from '../../../HOC/withRouter';
import { compose } from '@reduxjs/toolkit';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.router.params.profileID, this.props.authorizedUserID);

        this.props.getStatus(this.props.router.params.profileID, this.props.authorizedUserID);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state changed');
    return {
        authorizedUserID: state.auth.id,
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userStatus,
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = {
    setUserProfile,
    setUserStatus,
    addPost,
    getProfile,
    getStatus,
    updateStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer);

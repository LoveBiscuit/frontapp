/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addPost, setUserProfile, setUserStatus, getProfile, getStatus, updateStatus, updateAvatar, updateProfile } from './../../../Redux/profileReducer';
import Profile from './Profile';
import withAuthRedirect from '../../../HOC/withAuthRedirect';
import withRouter from '../../../HOC/withRouter';
import { compose } from '@reduxjs/toolkit';
import { useEffect } from 'react';

function ProfileContainer(props) {
    const { getProfile, getStatus } = props;

    // useEffect(() => {
    //     console.log('component did mount');

    //     return () => {
    //         console.log('component did unmount');
    //     }
    // }, []);
    
    useEffect(() => {
        const profileID = props.router.params.profileID;
        getProfile(profileID);
        getStatus(profileID);
    }, [getProfile, getStatus, props.router.params.profileID]);

    return (
        <div>
            <Profile {...props} isOwner={!props.router.params.profileID} />
        </div>
    )
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
    updateStatus,
    updateAvatar,
    updateProfile,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer);

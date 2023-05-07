/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText, setUserProfile } from './../../../Redux/profileReducer';
import Profile from './Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${28906}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

function mapDispatchToProps(state) {
    return {
        userProfile: state.profilePage.userProfile,
        postsData: state.profilePage.postsData,
        postTextarea: state.profilePage.postTextarea
    }
}

export default connect(mapDispatchToProps, {
    setUserProfile,
    addPost,
    updateNewPostText
})(ProfileContainer);
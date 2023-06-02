/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText, setUserProfile } from './../../../Redux/profileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileAPI } from '../../../API/API';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileID = !this.props.router.params.profileID ? 2 : this.props.router.params.profileID;

        profileAPI.getProfile(profileID)
            .then(data => {
                this.props.setUserProfile(data);
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

function mapStateToProps(state) {
    return {
        userProfile: state.profilePage.userProfile,
        postsData: state.profilePage.postsData,
        postTextarea: state.profilePage.postTextarea
    }
}

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
    setUserProfile,
    addPost,
    updateNewPostText
})(withRouter(ProfileContainer));
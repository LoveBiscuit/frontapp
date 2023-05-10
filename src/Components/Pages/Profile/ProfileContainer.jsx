/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText, setUserProfile } from './../../../Redux/profileReducer';
import Profile from './Profile';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileID = !this.props.router.params.profileID ? 2 : this.props.router.params.profileID;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileID}`)
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

export default connect(mapDispatchToProps, {
    setUserProfile,
    addPost,
    updateNewPostText
})(withRouter(ProfileContainer));
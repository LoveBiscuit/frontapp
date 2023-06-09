/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText, setUserProfile, getProfile } from './../../../Redux/profileReducer';
import Profile from './Profile';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.router.params.profileID, this.props.authID);
    }
    
    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/Login'}/>
        }
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        userProfile: state.profilePage.userProfile,
        postsData: state.profilePage.postsData,
        postTextarea: state.profilePage.postTextarea,
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
    updateNewPostText,
    getProfile
})(withRouter(ProfileContainer));
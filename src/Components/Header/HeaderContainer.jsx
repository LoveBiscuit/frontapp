/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, userLogout } from './../../Redux/authReducer';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} logout={this.props.userLogout} />
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {
    setAuthUserData,
    userLogout
})(HeaderContainer);
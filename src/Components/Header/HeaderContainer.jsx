/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from './../../Redux/authReducer';
import axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    let { id, email, login } = res.data.data;
                    this.props.setAuthUserData(id, email, login)
                } else {
                    console.error('oops...');
                }
            })

    }
    render() {
        return (
            <Header {...this.props} />
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
    setAuthUserData
})(HeaderContainer);
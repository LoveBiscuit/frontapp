import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

function mapStateToPropsRedirect(state) {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default function withAuthRedirect (Component) {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsRedirect)(RedirectComponent);
}
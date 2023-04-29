/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';

function Users(props) {
    return (
        <div className={s.wrapper}>
            USERS WILL BE HERE
            {console.log(props.users)}
        </div>
    );
}

export default Users;
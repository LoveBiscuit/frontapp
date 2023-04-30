/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';
import UsersItem from './UsersItem/UsersItem';

function Users(props) {
    let users = props.users.map(u => {
        return (
            <UsersItem
                key={u.id}
                userName={u.fullName}
                userStatus={u.status}
                userLocation={u.location}
                followStatus={u.followed === true ? 'Отписаться' : 'Подписаться'}
            />
        )
    })

    return (
        <div className={s.wrapper}>
            {users}
        </div>
    );
}

export default Users;
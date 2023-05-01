/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userAvatar from '../../../Assets/Images/userAvatar.jpg'

function Users(props) {
    window.users = props.users;

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items);
            });
    }

    return (
        props.users.map((u, id) => {
            return (
                <div key={id} className={s.mainWrapper}>
                    <div className={s.wrapper}>
                        <div className={s.leftBlock}>
                            <img className={s.userLogo} src={u.photos.small != null ? u.photos.small : userAvatar} />
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)} className={s.unfollowButton}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)} className={s.followButton}>Follow</button>
                            }
                        </div>
                        <div className={s.middleBlock}>
                            <div className={s.userName}>
                                {u.name}
                            </div>
                            <div className={s.userStatus}>
                                {u.status}
                            </div>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.userLocation}>
                                {/* <div>{u.location.country},</div> */}
                                {/* <div>{u.location.city}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default Users;
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';
import userAvatar from '../../../Assets/Images/userAvatar.jpg'
import { NavLink } from 'react-router-dom';

function Users(props) {
    let paginator = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= paginator; i++) {
        pages.push(i)
    }

    return (
        <div className={s.mainWrapper}>
            <div className={s.pageSelector}>
                {
                    pages.map((p, id) => {
                        if (p <= 10) {
                            return (
                                <div key={id} className={s.selector}>
                                    <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.active : ""}>{p}</span>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>

            {
                props.users.map((u, id) => {
                    return (
                        <div key={id} className={s.wrapper}>
                            <div className={s.leftBlock}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userAvatar} />
                                </NavLink>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)} className={s.unfollowButton}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)} className={s.followButton}>Follow</button>
                                }
                            </div>
                            <div className={s.middleBlock}>
                                <NavLink to={'/profile/' + u.id}>
                                    <div className={s.userName}>
                                        {u.name}
                                    </div>
                                </NavLink>
                                <div className={s.userStatus}>
                                    {u.status}
                                </div>
                            </div>
                            <div className={s.rightBlock}>
                                <div className={s.userLocation}>
                                    {u.id}
                                    {/* <div>{u.location.country},</div> */}
                                    {/* <div>{u.location.city}</div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default Users;
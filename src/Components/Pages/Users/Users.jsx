/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';
import userAvatar from '../../../Assets/Images/userAvatar.jpg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Users(props) {
    let pageCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    let portionCount = Math.ceil(pageCounter / props.portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    let startPage = (portionNumber - 1) * props.portionSize + 1;
    let endPage = portionNumber * props.portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(props.currentPage / props.portionSize));
    }, [props.currentPage, props.portionSize])

    for (let i = startPage; i <= pageCounter; i++) {
        pages.push(i)
    }

    return (
        <div className={s.mainWrapper}>
            <div className={s.paginator}>
                {startPage > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} >Prev</button>}
                <div className={s.pageSelector}>
                    {
                        pages.map((page, id) => {
                            if (page <= endPage) {
                                return (
                                    <div key={id} className={s.selector}>
                                        <span onClick={() => { props.changePage(page) }}
                                            className={props.currentPage === page ? s.active : undefined}>{page}</span>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>
                {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} >Next</button>}
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
                                    ? <button disabled={props.buttonInProgress.some(id => id === u.id)}
                                        onClick={() => props.unfollow(u.id)}
                                        className={props.buttonInProgress.some(id => id === u.id) ? s.disabledButton : s.unfollowButton}>Unfollow</button>
                                    : <button disabled={props.buttonInProgress.some(id => id === u.id)}
                                        onClick={() => props.follow(u.id)}
                                        className={props.buttonInProgress.some(id => id === u.id) ? s.disabledButton : s.followButton}>Follow</button>
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
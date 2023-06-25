/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';
import userAvatar from '../../../Assets/Images/userAvatar.jpg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Users(props) {
    let [startPage, setStartPage] = useState(1);
    let [endPage, setEndPage] = useState(10);

    let pageCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    console.log(startPage, endPage);

    function goToPrevPaginator() {
        setStartPage(startPage - 10);
        setEndPage(endPage - 10);
        console.log(startPage, endPage);
    }

    function goToNextPaginator() {
        setStartPage(startPage + 10);
        setEndPage(endPage + 10);
        console.log(startPage, endPage);
    }
    
    for (let i = startPage; i <= pageCounter; i++) {
        pages.push(i)
    }

    return (
        <div className={s.mainWrapper}>
            <div className={s.paginator}>
                <button onClick={() => goToPrevPaginator()} >Prev</button>
                <div className={s.pageSelector}>
                    {
                        pages.map((page, id) => {
                            if (page <= endPage) {
                                return (
                                    <div key={id} className={s.selector}>
                                        <span onClick={() => { props.changePage(page) }}
                                            className={props.currentPage === page ? s.active : ""}>{page}</span>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>
                <button onClick={() => goToNextPaginator()} >Next</button>
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
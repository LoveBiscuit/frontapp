/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';

function Users(props) {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, fullName: 'Adam', status: 'Живём-живём!', followed: true, avatar: 'https://ih0.redbubble.net/image.846505062.7003/flat,1000x1000,075,f.jpg', location: { country: 'Montenegro', city: 'Herceg-Novi' } },
            { id: 2, fullName: 'Nastya', status: 'Жизнь прекрасна, как никогда!', followed: false, avatar: 'https://i.pinimg.com/736x/60/e9/f7/60e9f7f194f424996e060420aa795739.jpg', location: { country: 'Russia', city: 'Moscow' } },
            { id: 3, fullName: 'Julia', status: 'Увлекаюсь историей и чем-то ещё', followed: true, avatar: 'https://pbs.twimg.com/media/FS5aF-MXsAEhLcb?format=jpg&name=4096x4096', location: { country: 'Ukraine', city: 'Kyiv' } },
            { id: 4, fullName: 'Evgeny', status: 'На работе...', followed: true, avatar: 'https://i.pinimg.com/originals/73/a2/1b/73a21b6b1b3ab91663860bee91d8f8cb.png', location: { country: 'Kazakhstan', city: 'Astana' } },
        ])
    }

    return (
        props.users.map((u, id) => {
            return (
                <div key={id} className={s.mainWrapper}>
                    <div className={s.wrapper}>
                        <div className={s.leftBlock}>
                            <img className={s.userLogo} src={u.avatar} />
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)} className={s.unfollowButton}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)} className={s.followButton}>Follow</button>
                            }
                        </div>
                        <div className={s.middleBlock}>
                            <div className={s.userName}>
                                {u.fullName}
                            </div>
                            <div className={s.userStatus}>
                                {u.status}
                            </div>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.userLocation}>
                                <div>{u.location.country},</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default Users;
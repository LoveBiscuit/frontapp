/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userAvatar from '../../../Assets/Images/userAvatar.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=15&page=1')
            .then(res => {
                this.props.setUsers(res.data.items);
                console.log(res.data.totalCount / 15);
            });
    };

    render() {
        return (
            <div className={s.mainWrapper}>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                    this.props.users.map((u, id) => {
                        return (
                            <div key={id} className={s.wrapper}>
                                <div className={s.leftBlock}>
                                    <img className={s.userLogo} src={u.photos.small != null ? u.photos.small : userAvatar} />
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)} className={s.unfollowButton}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)} className={s.followButton}>Follow</button>
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
        );
    }
}

export default Users;
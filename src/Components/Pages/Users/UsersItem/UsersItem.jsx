/* eslint-disable jsx-a11y/alt-text */
import s from './UsersItem.module.css';

function UsersItem(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.leftBlock}>
                <img className={s.userLogo} src='https://ih0.redbubble.net/image.846505062.7003/flat,1000x1000,075,f.jpg' />
                <button className={s.followButton}>{props.followStatus}</button>
            </div>
            <div className={s.middleBlock}>
                <div className={s.userName}>
                    {props.userName}
                </div>
                <div className={s.userStatus}>
                    {props.userStatus}
                </div>
            </div>
            <div className={s.rightBlock}>
                <div className={s.userLocation}>
                    <div>{props.userLocation.country},</div>
                    <div>{props.userLocation.city}</div>
                </div>
            </div>
        </div>
    );
}

export default UsersItem;
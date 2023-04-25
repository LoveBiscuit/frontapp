/* eslint-disable jsx-a11y/alt-text */
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My Posts/MyPostsContainer';

function Profile(props) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo />
            <div className={s.postsWrapper}>
                <MyPostsContainer store={props.store} />
            </div>
        </div>
    );
}

export default Profile;
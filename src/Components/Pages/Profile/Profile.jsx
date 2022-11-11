/* eslint-disable jsx-a11y/alt-text */
import s from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo />
            <div className={s.postsWrapper}>
                <MyPosts data={props.data.postsData} />
            </div>
        </div>
    );
}

export default Profile;
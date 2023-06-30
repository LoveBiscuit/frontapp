/* eslint-disable jsx-a11y/alt-text */
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './My Posts/MyPosts';

function Profile(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.profileInfoWrapper}>
                <h3>Профиль пользователя</h3>
                <ProfileInfo 
                isOwner={props.isOwner} 
                profile={props.userProfile}
                status={props.userStatus} 
                updateStatus={props.updateStatus} 
                updateAvatar={props.updateAvatar}
                updateProfile={props.updateProfile}
                />
            </div>
            <div className={s.postsWrapper}>
                <h3>Мои посты</h3>
                <MyPosts
                    postsData={props.postsData}
                    postTextarea={props.postTextarea}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>
    );
}

export default Profile;
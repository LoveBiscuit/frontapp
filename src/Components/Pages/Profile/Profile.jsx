/* eslint-disable jsx-a11y/alt-text */
import s from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';

function Profile() {
    return (
        <div className={s.wrapper}>
            <div className={s.banner}>
                <img alt="prop" src="https://thumbs.dreamstime.com/b/space-background-wide-colorful-cosmos-banner-realistic-galaxy-bright-stars-nebula-shining-constellations-futuristic-cosmic-224335559.jpg" />
            </div>
            <div>
                avatar + description
            </div>
            <div className={s.postsWrapper}>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;
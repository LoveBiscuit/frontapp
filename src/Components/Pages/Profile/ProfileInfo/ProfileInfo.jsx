/* eslint-disable jsx-a11y/alt-text */
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.wrapper}>
            <div className={s.banner}>
                <img alt="prop" src="https://thumbs.dreamstime.com/b/space-background-wide-colorful-cosmos-banner-realistic-galaxy-bright-stars-nebula-shining-constellations-futuristic-cosmic-224335559.jpg" />
            </div>
            <div className={s.description}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;
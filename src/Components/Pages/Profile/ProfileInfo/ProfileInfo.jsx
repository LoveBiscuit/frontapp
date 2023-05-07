/* eslint-disable jsx-a11y/alt-text */
import s from './ProfileInfo.module.css';
import userAvar from '../../../../Assets/Images/userAvatar.jpg'
import Preloader from './../../../Common/Preloader/Preloader';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={s.wrapper}>
                {/* <div className={s.banner}>
                    <img alt="prop" src="https://thumbs.dreamstime.com/b/space-background-wide-colorful-cosmos-banner-realistic-galaxy-bright-stars-nebula-shining-constellations-futuristic-cosmic-224335559.jpg" />
                </div> */}
                <div className={s.description}>
                    <img src={props.profile.photos.small ? props.profile.photos.large : userAvar} />
                    <div>
                        {props.profile.aboutMe}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
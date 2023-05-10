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
                <img className={s.userPhoto} src={props.profile.photos.small ? props.profile.photos.large : userAvar} />
                <div className={s.aboutMe}>
                    <div className={s.userName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.userId}>
                        {props.profile.userId}
                    </div>
                    <div className={s.description}>
                        {props.profile.aboutMe}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
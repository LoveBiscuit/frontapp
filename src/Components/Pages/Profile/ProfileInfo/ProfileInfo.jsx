/* eslint-disable jsx-a11y/alt-text */
import s from './ProfileInfo.module.css';
import userAvar from '../../../../Assets/Images/userAvatar.jpg';
import Preloader from './../../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={s.wrapper}>
                <img className={s.userPhoto} src={props.profile.photos.small ? props.profile.photos.large : userAvar} />
                <div className={s.aboutMe}>
                    <div className={s.userName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.userId}>
                        {props.profile.userId}
                    </div>
                    <div className={s.description}>
                        {/* {props.profile.aboutMe} */}
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
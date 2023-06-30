/* eslint-disable jsx-a11y/alt-text */
import s from './ProfileInfo.module.css';
import userAvar from '../../../../Assets/Images/userAvatar.jpg';
import Preloader from './../../../Common/Preloader/Preloader';
// import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ProfileInfo(props) {
    const [editMode, setEditMode] = useState(false);

    async function onSubmit(data) {
        data = {
            ...data,
            fullName: props.profile.fullName
        }
        await props.updateProfile(data);
        setEditMode(false);
    }

    function onCancel() {
        setEditMode(false);
    }

    if (!props.profile) {
        return <Preloader />
    } else {
        function onMainAvatarSelected(e) {
            if (e.target.files.length) {
                props.updateAvatar(e.target.files[0]);
            }
        }

        return (
            <div className={s.wrapper}>
                <div>
                    <img className={s.userPhoto} src={props.profile.photos.large || userAvar} />
                    {props.isOwner
                        &&
                        <center>
                            <input type='file' onChange={onMainAvatarSelected} />
                        </center>
                    }
                </div>
                {editMode
                    ? <ProfileDataForm
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        isOwner={props.isOwner}
                        disableEditMode={() => setEditMode(false)}
                        onSubmit={onSubmit}
                        onCancel={onCancel} />
                    : <ProfileData
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        isOwner={props.isOwner}
                        enableEditMode={() => setEditMode(true)} />
                }

            </div>
        )
    }
}

function ProfileData(props) {
    return (
        <>
            <div className={s.editableInfo}>
                <div>
                    <b>About me:</b>
                    <div style={{ color: 'blue' }}>
                        {props.profile.aboutMe || 'empty about me'}
                    </div>
                </div>
                <div>
                    <b>Looking job:</b>
                    <div>
                        {!props.profile.lookingForAJob
                            ? <span style={{ color: 'red' }}>False</span>
                            : <span style={{ color: 'green' }}>Yes</span>}
                    </div>
                </div>
                <b>Contacts:</b>
                <div>
                    {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <Conctact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        )
                    })}
                </div>
                <div>
                    <b>Professional skills:</b>
                    <div style={{ color: 'purple' }}>
                        {props.profile.lookingForAJobDescription || <div>empty field</div>}
                    </div>
                </div>
                {props.isOwner &&
                    <div>
                        <button onClick={props.enableEditMode} >Edit Profile</button>
                    </div>
                }
            </div>
            <div className={s.aboutMe}>
                <div className={s.userName}>
                    {props.profile.fullName}
                </div>
                <div className={s.userId}>
                    {props.profile.userId}
                </div>
                <div className={s.description}>
                    {/* {props.profile.aboutMe} */}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </>
    )
}

function ProfileDataForm(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    return (
        <>
            <form className={s.editableInfo} onSubmit={handleSubmit(props.onSubmit)}>
                <div>
                    <div>
                        <b>About me:</b>
                        <div>
                            <textarea
                                placeholder='About you...'
                                defaultValue={props.profile.aboutMe}
                                {...register('aboutMe', {
                                    required: 'Write something about you...',
                                })} />
                            {errors.aboutMe && <p>{errors.aboutMe?.message}</p>}
                        </div>
                    </div>
                    <div>
                        <b>Looking job:</b>
                        <div>
                            <label>
                                <input type='checkbox' defaultChecked={props.profile.lookingForAJob} {...register('lookingForAJob')} />
                                <span>Yes</span>
                            </label>
                        </div>
                    </div>
                </div>
                <b>Contacts:</b>
                <div>
                    {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                <span style={{ display: 'block' }}>{key}:</span>
                                <input
                                    placeholder={key}
                                    defaultValue={props.profile.contacts[key]}
                                    {...register('contacts.' + [key], {
                                        pattern: {
                                            // eslint-disable-next-line no-useless-escape
                                            value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                                            message: 'Oh my... Non valid link.'
                                        }
                                    })} />
                                {errors?.contacts?.[key] && <p>{errors?.contacts?.[key].message}</p>}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <b>Professional skills:</b>
                    <div>
                        <textarea
                            placeholder='Your skills...'
                            defaultValue={props.profile.lookingForAJobDescription}
                            {...register('lookingForAJobDescription', {
                                required: 'Your skills is important for us.'
                            })} />
                        {errors.lookingForAJobDescription && <p>{errors.lookingForAJobDescription?.message}</p>}
                    </div>
                </div>
                {props.isOwner &&
                    <div>
                        <button type='submit' >Save Profile</button>
                        <button type="button" onClick={props.onCancel} >Cancel</button>
                    </div>
                }
            </form >
            <div className={s.aboutMe}>
                <div className={s.userName}>
                    {props.profile.fullName}
                </div>
                <div className={s.userId}>
                    {props.profile.userId}
                </div>
                <div className={s.description}>
                    {/* {props.profile.aboutMe} */}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </>
    )
}

function Conctact({ contactTitle, contactValue }) {
    return (
        <>
            <div>
                {contactTitle}: {contactValue || 'none'}
            </div>
        </>
    )
}

export default ProfileInfo;
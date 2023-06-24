/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './ProfileStatus.module.css'
import { useState, useEffect } from 'react';

export default function ProfileStatusWithHooks(props) {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const enableEditMode = () => {
        setEditMode(true);
    }

    const disableEditMode = () => {
        setEditMode(false);

        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const onEnter = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            disableEditMode();
        }
    }

    return (
        <>
            <div className={s.wrapper}>
                {!editMode
                    ?
                    <div>
                        <span
                            onClick={enableEditMode}
                        >{status}</span>
                    </div>
                    :
                    <div>
                        <input
                            autoFocus
                            onChange={onStatusChange}
                            onKeyDown={onEnter}
                            onBlur={disableEditMode}
                            defaultValue={status}
                        ></input>
                    </div>
                }
            </div>
        </>
    )
}

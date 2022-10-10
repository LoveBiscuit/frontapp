/* eslint-disable jsx-a11y/alt-text */
import s from './Dialogs.module.css';

function Dialogs(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.contactList}>
                Contacts
            </div>
            <div className={s.dialog}>
                Dialogs
            </div>
        </div>
    );
}

export default Dialogs;
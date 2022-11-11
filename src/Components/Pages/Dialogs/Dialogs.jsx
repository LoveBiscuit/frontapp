/* eslint-disable jsx-a11y/alt-text */
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Dialogs(props) {

    let dialogsData = props.data.dialogsData;
    let messagesData = props.data.messagesData;
    let dialogsElements = dialogsData
        .map((el, i) => <DialogItem key={i} id={el.id} name={el.name} />);

    let messagesElements = messagesData
        .map((el, i) => <MessageItem key={i} message={el.message} />);

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
/* eslint-disable jsx-a11y/alt-text */
import s from './MessageItem.module.css';

function MessageItem(props) {
    return (
        <div className={s.messageItem}>{props.message}</div>
    );
}

export default MessageItem;
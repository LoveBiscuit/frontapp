/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogItem(props) {
    return (
        <div className={s.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => isActive ? s.active : ""}>{props.name}</NavLink>
        </div>
    );
}

function MessageItem(props) {
    return (
        <div className={s.messageItem}>{props.message}</div>
    );
}

function Dialogs(props) {

    let dialogsData = [
        { id: 1, name: 'Adam' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Светлана' },
        { id: 4, name: 'Павел' },
        { id: 5, name: 'Юля' },
        { id: 6, name: 'Дмитрий' },
        { id: 7, name: 'Stephan' }
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
                <DialogItem id={dialogsData[6].id} name={dialogsData[6].name} />
            </div>

            <div className={s.messagesItems}>
                <MessageItem message="Привет! Как дела?" />
                <MessageItem message="Wazzzup!" />
                <MessageItem message="Идёшь сегодня на вечеринку?" />
                <MessageItem message="Эмм... Да" />
                <MessageItem message="Ну как там с деньгами?" />
            </div>
        </div>
    );
}

export default Dialogs;
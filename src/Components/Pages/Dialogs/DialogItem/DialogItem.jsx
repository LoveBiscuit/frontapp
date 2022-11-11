/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

function DialogItem(props) {
    return (
        <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => isActive ? s.active : ""}>
            <div className={s.dialogItem}>
                <img src="https://cdn.shopify.com/s/files/1/0276/9341/6585/files/Sleeping_Cat_Square_600x600@2x.jpg?v=1580223452" />
                <span>{props.name}</span>
            </div>
        </NavLink>
    );
}

export default DialogItem;
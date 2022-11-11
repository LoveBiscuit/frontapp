/* eslint-disable jsx-a11y/alt-text */
import s from './FriendsItem.module.css';

function FriendsItem(props) {
    return (
        <div className={s.item}>
            <img src="https://cdn.shopify.com/s/files/1/0276/9341/6585/files/Sleeping_Cat_Square_600x600@2x.jpg?v=1580223452" />
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default FriendsItem;
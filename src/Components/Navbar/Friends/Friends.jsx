import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

function Friends(props) {

    let friendsData = props.data;
    let friendsElements = friendsData
        .slice(0, 3)
        .map((el, i) => <FriendsItem key={i} name={el.name} />)

    return (
        <div className={s.wrapper}>
            {friendsElements}
        </div>
    );
}

export default Friends;
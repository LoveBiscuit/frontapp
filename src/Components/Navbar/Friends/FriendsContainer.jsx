import Friends from './Friends';

function FriendsContainer(props) {
    return (
        <Friends friends={props.store.getState().friendsList.friendsList} />
    );
}

export default FriendsContainer;
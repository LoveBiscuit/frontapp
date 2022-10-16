/* eslint-disable jsx-a11y/alt-text */
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Это моё первое сообщение!" />
                <Post message="Вау! А это второе!" />
                <Post message="hmmm..." />
                <Post message="It's my first message!" />
            </div>
        </div>
    );
}

export default MyPosts;
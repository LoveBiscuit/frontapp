/* eslint-disable jsx-a11y/alt-text */
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.post}>
            <div>
                <img className={s.userPhoto} src="https://cdn.shopify.com/s/files/1/0276/9341/6585/files/Sleeping_Cat_Square_600x600@2x.jpg?v=1580223452" />
            </div>
            <div className={s.postBody}>
                <div className={s.userName}>
                    Test
                    {props.userName}
                </div>
                <div className={s.userPost}>
                    {props.message}
                </div>
                <div className={s.likeButton}>
                    <button>Like ({props.likesCount})</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
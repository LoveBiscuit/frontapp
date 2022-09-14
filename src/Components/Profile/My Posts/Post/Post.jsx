/* eslint-disable jsx-a11y/alt-text */
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://cdn.shopify.com/s/files/1/0276/9341/6585/files/Sleeping_Cat_Square_600x600@2x.jpg?v=1580223452" />
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;
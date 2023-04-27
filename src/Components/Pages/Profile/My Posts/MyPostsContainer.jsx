/* eslint-disable jsx-a11y/alt-text */
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profileReducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        posts: state.profilePage.postsData,
        postTextarea: state.profilePage.postTextarea
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
/* eslint-disable jsx-a11y/alt-text */
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profileReducer';
import { connect } from 'react-redux';

// function MyPostsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let dispatch = store.dispatch;

//                 let addPost = () => {
//                     dispatch(addPostActionCreator());
//                 }

//                 let onTextareaChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     dispatch(action);
//                 }

//                 return (
//                     <MyPosts
//                         updateNewPostText={onTextareaChange}
//                         addPost={addPost}
//                         posts={state.profilePage.postsData}
//                         postTextarea={state.profilePage.postTextarea} />
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }

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
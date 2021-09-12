import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Post from './Post';
import PostVieweControl from './PostVieweControl';
import Loader from '../UI/Loader';

function PostsList(props) {
  if(props.isPostLoading) {
    return (
      <Loader />
    );
  }

  if(props.posts.length === 0) {
    return (
      <div>
        <h1 className={"post-list_title"}>Посты не найдены</h1>
        <PostVieweControl
          changePostOrder={props.changePostOrder}
          findPosts={props.findPosts}
          setModalState={props.setModalState} 
        />
      </div>
    );
  }
  
  return (
    <div>
      <h1 className={"post-list_title"}>Список постов</h1>
      <PostVieweControl
        changePostOrder={props.changePostOrder}
        findPosts={props.findPosts}
        setModalState={props.setModalState} 
      />
      <TransitionGroup>
        {props.posts.map(post => 
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <Post deletePost={props.deletePost} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostsList;
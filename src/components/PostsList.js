import React from 'react';
import Post from './Post';
import PostVieweControl from './PostVieweControl';

function PostsList(props) {
  console.log(props);

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
      {props.posts.map(post => 
        <Post deletePost={props.deletePost} post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostsList;
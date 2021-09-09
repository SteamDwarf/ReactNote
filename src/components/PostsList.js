import React from 'react';
import Post from './Post';

function PostsList({posts, deletePost}) {
  if(posts.length === 0) {
    return (
      <div>
        <h1>Посты не найдены</h1>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className={"post-list_title"}>Список постов</h1>

      {posts.map(post => 
        <Post deletePost={deletePost} post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostsList;
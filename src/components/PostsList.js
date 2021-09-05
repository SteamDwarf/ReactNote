import React from 'react';
import Post from './Post';

function PostsList({posts, deletePost}) {
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
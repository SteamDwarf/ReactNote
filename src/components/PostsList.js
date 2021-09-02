import React from 'react';
import Post from './Post';

function PostsList({posts}) {
  return (
    <div className={"post-list"}>
      <h1 className={"post-list_title"}>Список постов</h1>
      
      {posts.map(post => 
        <Post post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostsList;
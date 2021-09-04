import React from 'react';
import MySelect from '../UI/MySelect';
import Post from './Post';

function PostsList({posts, deletePost, changeSortOption, options}) {
  return (
    <div className={"post-list"}>
      <h1 className={"post-list_title"}>Список постов</h1>
      
      <div className={"post-sort_block"}>
        <MySelect 
          changeSortOption={changeSortOption} 
          options={options}
        />
      </div>

      {posts.map(post => 
        <Post deletePost={deletePost} post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostsList;
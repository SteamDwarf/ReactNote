import React from 'react';
import MyBtn from '../UI/MyBtn';

function Post ({post}) {
    return (
        <div className = {"post"}>
            <div className = {"post_text"}>
              <h1 className = {"post_title"}>
                {post.title}
              </h1>
              <div className = {"post_body"}>
                {post.body}
              </div>
            </div>
            <MyBtn className={"post_btn"}>Удалить</MyBtn>
        </div>
      );
};

export default Post;
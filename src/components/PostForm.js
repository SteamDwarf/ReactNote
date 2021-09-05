import {React, useState} from 'react';
import MyBtn from '../UI/MyBtn';
import MyInput from '../UI/MyInput';
import MyTextarea from '../UI/MyTextarea';

function PostForm({addNewPost}) {
  const [post, setPost] = useState({title: "", body: ""});
  
  function createNewPost(e) {
    e.preventDefault();
    
    if(post.title === "" && post.body === "") {
      return;
    }

    const newPost = {
      ...post, id: Date.now()
    };
    
    addNewPost(newPost);
    
    setPost({title: "", body: ""})
  }

  return ( 
    <form className={"post-form"}>
      <MyInput
        value={post.title}
        placeholder={"Заголовок"} 
        onChange={e => setPost({...post, title: e.target.value})}
        className={"titleInput"}
      />
      <MyTextarea
        value={post.body}
        placeholder={"Описание"} 
        onChange={e => setPost({...post, body: e.target.value})}
      />
      <MyBtn onClick={createNewPost}>
        Добавить пост
      </MyBtn>
    </form>
  )
};

export default PostForm;
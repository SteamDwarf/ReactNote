import {React, useState} from 'react';
import MyBtn from '../UI/MyBtn';

function PostForm({addNewPost}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  function createNewPost(e) {
    e.preventDefault();
    
    const newPost = {
      id: Date.now, title: title, body: body
    };
    
    addNewPost(newPost);
    
    setTitle("");
    setBody("");
  }

  return ( 
    <form className={"post-form"}>
      <input
        value={title}
        placeholder={"Заголовок"} 
        className={"post-form_input"}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        value={body}
        placeholder={"Описание"} 
        className={"post-form_input-big post-form_input"}
        onChange={e => setBody(e.target.value)}
      />
      <MyBtn onClick={createNewPost}>
        Добавить пост
      </MyBtn>
    </form>
  )
};

export default PostForm;
import React from 'react';
import MyBtn from '../UI/MyBtn';

function PostForm() {
  return ( 
    <form className={"post-form"}>
      <input placeholder={"Заголовок"} className={"post-form_input"}/>
      <input placeholder={"Описание"} className={"post-form_input"}/>
      <MyBtn className={"post_btn"}>Добавить пост</MyBtn>
    </form>
  )
};

export default PostForm;
import React, {useState} from 'react';
import "./styles/App.css";
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

function App () {
  
  const [posts, setPosts] = useState([
    {id: "1", title: "Java Script", body: "Java Script крутой язык программирования"},
    {id: "2", title: "C#", body: "С# тоже крутой язык программирования"},
    {id: "3", title: "Python", body: "Ну и Python, куда же без него"},
  ]);
  
  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
  }
  
  function deletePost(delPost) {
    
    setPosts(posts.filter(post => post.id !== delPost.id));
  }
  
  return (
    <div className="App">
      <PostForm addNewPost={addNewPost}/>
      <PostsList posts={posts} deletePost={deletePost}/>
    </div>
  );
}

export default App;

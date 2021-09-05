import React, {useState} from 'react';
import "./styles/App.css";
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import PostVieweControl from './components/PostVieweControl';

function App () {
  
  const [posts, setPosts] = useState([
    {id: "1", title: "Java Script", body: "Java Script крутой язык программирования"},
    {id: "2", title: "C#", body: "С# тоже крутой язык программирования"},
    {id: "3", title: "Python", body: "Ну и Python, куда же без него"},
  ]);
  //const [curSortOption, setCurSortOption] = useState('');

  

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
  }
  function deletePost(delPost) {
    setPosts(posts.filter(post => post.id !== delPost.id));
  }
  function changePostOrder(value) {
    setPosts([...posts].sort((a,b) => a[value].localeCompare(b[value])));
  }
  
  return (
    <div className="App">
      <PostForm addNewPost={addNewPost}/>
      {
        posts.length !== 0
        ?
          <div className={"post-list"}>
            <PostVieweControl changePostOrder={changePostOrder} />
            <PostsList posts={posts} deletePost={deletePost}/>
          </div>
        :
          <h1>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;

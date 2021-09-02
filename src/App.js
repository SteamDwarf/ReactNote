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
  
  return (
    <div className="App">
      <PostForm />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;

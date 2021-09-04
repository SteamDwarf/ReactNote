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
  const [curSortOption, setCurSortOption] = useState({
    value: 'title',
    text: 'заголовку'
  });

  const sortOptions = [
    {value: 'title', text: 'заголовку'},
    {value: 'description', text: 'описанию'}
  ];

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
  }
  function deletePost(delPost) {
    setPosts(posts.filter(post => post.id !== delPost.id));
  }
  function changeSortOption(value) {
    const newSortOption = sortOptions.filter(op => op.value === value)[0];

    setCurSortOption(newSortOption);
    console.log(curSortOption);
  }
  
  return (
    <div className="App">
      <PostForm addNewPost={addNewPost}/>
      {
        posts.length !== 0
        ?<PostsList posts={posts} deletePost={deletePost} changeSortOption={changeSortOption} options={sortOptions}/>
        :<h1>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;

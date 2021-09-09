import {React, useState, useMemo} from 'react';
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
  const [curSortOption, setCurSortOption] = useState('title');
  const [postFilter, setPostFilter] = useState('');

  const sortedPosts = useMemo(() => {
    return ([...posts].sort((a,b) => a[curSortOption].localeCompare(b[curSortOption]))
    );
  }, [posts, curSortOption]);
  
  const sortedAndFilteredPosts = useMemo(() => {
    let findedPosts = [];
    if(postFilter === '') {
      findedPosts = sortedPosts;
    } else {
      sortedPosts.forEach(post => {
        let postTitle = post.title.toLowerCase();
        let postBody = post.body.toLowerCase();
        if(postTitle.includes(postFilter) || postBody.includes(postFilter)) {
          findedPosts.push(post);
        }
      });
    }
    return findedPosts;
  }, [postFilter, posts]);


  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
  }
  function deletePost(delPost) {
    setPosts(posts.filter(post => post.id !== delPost.id));
  }
  function changePostOrder(value) {
    setCurSortOption(value);
    setPosts([...posts].sort((a,b) => a[value].localeCompare(b[value])));
  }
  function findPosts(value) {
    let lowerValue = value.toLowerCase();
    setPostFilter(lowerValue);
  }
  
  return (
    <div className="App">
      <PostForm addNewPost={addNewPost}/>
      <PostVieweControl
        changePostOrder={changePostOrder}
        findPosts={findPosts} 
      />
          <div className={"post-list"}>
            <PostsList 
              posts={sortedAndFilteredPosts}
              deletePost={deletePost}
            />
          </div>
      
    </div>
  );
}

export default App;

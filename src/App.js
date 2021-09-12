import {React, useState, useEffect} from 'react';
import "./styles/App.css";
import PostsList from './components/PostsList';
import MyModal from './UI/MyModal';
import { useSortedAndFilteredPosts } from './hooks/usePosts';
import PostService from './API/PostService';

function App () {
 
  const [posts, setPosts] = useState([
/*     {id: "1", title: "Java Script", body: "Java Script крутой язык программирования"},
    {id: "2", title: "C#", body: "С# тоже крутой язык программирования"},
    {id: "3", title: "Python", body: "Ну и Python, куда же без него"}, */
  ]);
  const [curSortOption, setCurSortOption] = useState('title');
  const [postFilter, setPostFilter] = useState('');
  const [modalState, setModalState] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const sortedAndFilteredPosts = useSortedAndFilteredPosts(postFilter, posts, curSortOption);

  async function fetchPosts() {
    setIsPostLoading(true);
    const gettedPosts = await PostService.getAll();
    setPosts(gettedPosts);
    setIsPostLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
      <MyModal 
        posts={posts}
        setPosts={setPosts}
        modalState={modalState}
        setModalState={setModalState}
      />
          <div className={"post-list"}>
            <PostsList 
              posts={sortedAndFilteredPosts}
              deletePost={deletePost}
              changePostOrder={changePostOrder}
              findPosts={findPosts}
              setModalState={setModalState} 
              isPostLoading={isPostLoading}
            />
          </div>
      
    </div>
  );
}

export default App;

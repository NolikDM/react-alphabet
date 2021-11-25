import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'bc', body: '1112'},
        {id: 2, title: 'ab', body: '2223'},
        {id: 3, title: 'dc', body: '1'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        console.log('ОТРАБОТАЛА ФУНКЦИЯ SORTED POSTS')
        if (filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    // Call-back функция для передачи информации от PostForm родителю App
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    // получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


  return (
      <div className="App">
          <MyButton onClick={}>
              Создать пост
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
          <hr style={{margin: '15px 0'}} />
          <PostFilter filter={filter} setFilter={setFilter}/>
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
      </div>
  );
}

export default App;

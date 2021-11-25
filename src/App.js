import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: '11'},
        {id: 2, title: 'bb', body: '22'},
        {id: 3, title: 'cc', body: '33'}
    ])

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
        <PostForm create={createPost}/>
        {
            posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title='Список постов'/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены!!!
                </h1>
        }
    </div>
  );
}

export default App;

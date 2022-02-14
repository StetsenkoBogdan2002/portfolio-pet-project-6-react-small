import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSript", descr: "JavaScript - язык программирование" },
    { id: 2, title: "Python", descr: "Python - НЕ язык программирование" },
    { id: 3, title: "C#", descr: "C# - язык программирование" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "descr", name: "По описанию" },
        ]}
      />
      <PostList
        removePost={removePost}
        mainTitle={"Список постов"}
        posts={posts}
      />
      {posts.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
            color: "red",
            textTransform: "uppercase",
          }}
        >
          Посты не найдены!
        </h2>
      ) : null}
    </div>
  );
}

export default App;

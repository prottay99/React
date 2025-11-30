import { useState, useEffect } from "react";
import "./App.css";
import useFetchData from "./hooks/useFetchData";

function App() {
  const users = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    (data) => data.map((item) => ({ id: item.id, name: item.name }))
  );
  const posts = useFetchData(
    "https://jsonplaceholder.typicode.com/posts",
    (data) => data.slice(0, 10)
  );
  const comments = useFetchData(
    "https://jsonplaceholder.typicode.com/comments",
    (data) => data.slice(0, 10)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "800px",
      }}
    >
      <div>
        <h2>Users</h2>
        <hr />
        {users.loading && <h3>Loading...</h3>}
        {users.error && <h3>{users.error}</h3>}
        {Array.isArray(users.data) &&
          users.data.map((user) => <li key={user.id}>{user.name}</li>)}
      </div>
      <div>
        <h2>Posts</h2>
        <hr />
        {posts.loading && <h3>Loading...</h3>}
        {posts.error && <h3>{posts.error}</h3>}
        {posts.data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>

      <div>
        <h2>Posts</h2>
        <hr />
        {comments.loading && <h3>Loading...</h3>}
        {comments.error && <h3>{comments.error}</h3>}
        {comments.data?.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </div>
    </div>
  );
}

export default App;

/*
1. fetch and update state
2. loading handle 
3. error handle
*/

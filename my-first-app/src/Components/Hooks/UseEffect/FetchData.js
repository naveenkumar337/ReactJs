import React, { useState, useEffect } from "react";
import axios from "axios";
function FetchData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      console.log("cleanup calld");
    };
  }, []);
  return (
    <div>
      <ul>
        {posts.slice(0, 5).map((post, index) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

function FetchingDataWithID() {
  const [posts, setPosts] = useState({});
  const [ID, setID] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${ID}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [ID]);
  return (
    <div>
      <input type="text" value={ID} onChange={(e) => setID(e.target.value)} />
      <p> {posts.title}</p>
    </div>
  );
}

export { FetchData, FetchingDataWithID };

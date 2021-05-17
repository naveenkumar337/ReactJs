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
      {/* <ul> */}
      <table class="table text-center table-striped table-hover">
         
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>

        {posts.slice(0, 5).map((post, index) => (
          <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
        ))}
        </table>
      {/* </ul> */}
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
      <div class="row border-2 light-gray bg-lime">
        <p class="col-mg-4 col-lg-1 col-sm-1">{posts.id}</p>
        <p class="col-mg-4 col-lg-5 col-sm-5">{posts.title}</p>
        <p class="col-mg-4 col-lg-6 col-sm-6">{posts.body}</p>       
      </div>
    </div>
  );
}

export { FetchData, FetchingDataWithID };

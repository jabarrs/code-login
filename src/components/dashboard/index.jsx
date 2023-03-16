import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => setPosts(response.data));
  }, []);
  console.log(posts);
  return (
    <section className="section">
      <label className="title is-3">Cinta coding</label>
      <label className="title-right is-3">Welcome</label>
      <div className="hero">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-6-desktop">
              <div class="panel has-text-centered">
                <p class="panel-heading">Post</p>
                <div class="panel-block">
                  <p class="control has-icons-left">
                    <input className="input is-rounded" type="text" placeholder="Search" />
                    <span class="icon is-left">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
                <div className="posts-container">
                  {posts.map((post) => {
                    return (
                      <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

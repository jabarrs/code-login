import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const userLog = user.name;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => setPosts(response.data));
  }, []);
  console.log(userLog);
  console.log(user);
  return (
    <section className='section'>
      <label className='title is-3'>Cinta coding</label>
      <label style={{ marginLeft: '400px' }} className='title-right is-3'>
        Welcome, <b>{userLog}</b>
      </label>
      <div className='hero'>
        <div className='container has-text-centered'>
          <div className='columns is-centered'>
            <div className='column is-6-desktop'>
              <div className='panel has-text-centered'>
                <p className='panel-heading'>Post</p>
                <div className='panel-block'>
                  <p className='control has-icons-left'>
                    <input className='input is-rounded' type='text' placeholder='Search' />
                    <span className='icon is-left'>
                      <i className='fas fa-search' aria-hidden='true'></i>
                    </span>
                  </p>
                </div>
                <div className='posts-container'>
                  {posts.map((post) => {
                    return (
                      <div className='post-card' key={post.id}>
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-body'>{post.body}</p>
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

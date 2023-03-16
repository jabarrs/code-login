import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../posts';
import Pagination from '../pagination';

const Dashboard = ({ user }) => {
  const userLog = user.username;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="section">
      <label className="title is-3">Cinta coding</label>
      <nav class="breadcrumb is-right" aria-label="breadcrumbs">
        <ul>
          <li class="is-active">
            <label className="title is-5">
              Welcome, <b>{userLog}</b>
            </label>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <div className="panel has-text-centered">
                <p className="panel-heading">Post</p>
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input className="input is-rounded" type="text" placeholder="Search" />
                    <span className="icon is-left">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
                <Posts posts={currentPosts} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

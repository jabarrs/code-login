import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <ul className="field">
      {posts.map((post) => (
        <li key={post.id} className="menu">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;

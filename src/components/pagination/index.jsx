import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage / 4); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <a class="pagination-previous is-disabled" title="This is the first page">
        Previous
      </a>
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-link is-current">
            <button onClick={() => paginate(number)} class="pagination">
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button class="pagination-next">Next page</button>
    </nav>
  );
};

export default Pagination;

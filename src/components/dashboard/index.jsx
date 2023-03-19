import React, { useEffect, useState } from 'react';
import './style.css';

const renderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key={index}>{todo.title}</li>;
      })}
    </ul>
  );
};

const Dashboard = ({ user }) => {
  const userLog = user.username;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick} className={currentPage === number ? 'active' : null}>
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNext}>&hellip;</li>;
  }

  let pageDicrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDicrementBtn = <li onClick={handlePrev}>&hellip;</li>;
  }

  return (
    <section className="section">
      <label className="title is-3">Cinta coding</label>
      <nav className="breadcrumb is-right" aria-label="breadcrumbs">
        <ul>
          <li className="is-active">
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
                <br />
                {renderData(currentItem)}
                <br />
                <ul className="pageNumbers">
                  <li>
                    <button onClick={handlePrev} disabled={currentPage === pages[0] ? true : false}>
                      Prev
                    </button>
                  </li>
                  {pageDicrementBtn}
                  {renderPageNumber}
                  {pageIncrementBtn}
                  <li>
                    <button onClick={handleNext} disabled={currentPage === pages[pages.length - 1] ? true : false}>
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

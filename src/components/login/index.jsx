import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => setUsers(response.data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      users.forEach((el) => {
        if (el.username === username) {
          setMessage('Successfully Get Data');
          setUser(el);
          navigate('/dashboard');
        } else if (el !== username) {
          setMessage('--No User Data Exists--');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="hero has-background-white-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="container mb-6">
            <p className="subtitle is-4">{message}</p>
          </div>
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={handleSubmit}>
                <p className="title is-3 ">Login Page</p>
                <div className="field mt-6">
                  <div className="controls">
                    <input type="text" className="input is-rounded mt-4 " placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="controls">
                    <input type="password" className="input is-rounded mt-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-6">
                  <button className="button is-rounded is-link is-fullwidth">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

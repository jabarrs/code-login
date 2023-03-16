import Dashboard from './components/dashboard';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login user={user} setUser={setUser} />} />
          <Route
            exact
            path='/dashboard'
            element={
              <>
                <Dashboard user={user} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

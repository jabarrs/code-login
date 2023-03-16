import Dashboard from './components/dashboard';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

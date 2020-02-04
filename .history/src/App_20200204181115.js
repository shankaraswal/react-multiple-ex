import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/common/Header'
import Navbar from './components/common/Navbar';
import CopyArea from './components/common/CopyArea'

import Toastify from './components/Toastify/Toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
       <Navbar />
        <Switch>
          <div className="container mt-4">
            <Route path='/' component={Toastify} />
          </div>

      </Switch>
      </Router>
    </div>
  );
}
export default App;

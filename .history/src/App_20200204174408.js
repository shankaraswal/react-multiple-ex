import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Navbar from './components/common/Navbar';
import CopyArea from './components/common/CopyArea'

import Toastify from './components/Toastify'

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <div>
            <Route path='/' component={Toastify} />
          </div>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

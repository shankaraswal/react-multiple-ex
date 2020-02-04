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
          <Route path='/' component={Toastify}>
      </BrowserRouter>
    </div>
  );
}

export default App;

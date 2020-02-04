import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/common/Header'
import CopyArea from './components/common/CopyArea'
import Navbar from './components/common/Navbar';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Navbar/>
      <Switch>
          <Route path='/' component={Toastify}>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

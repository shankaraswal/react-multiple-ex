import React from 'react';
import BrowserRouter from 'react-router-dom'

import Header from './components/common/Header'
import CopyArea from './components/common/CopyArea'
import Navbar from './components/common/Navbar';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Header />
      <Navbar/>
      <Switch>
        <Route>


        </Route>

      </Switch>
        <CopyArea />
      </BrowserRouter>
    </div>
  );
}

export default App;

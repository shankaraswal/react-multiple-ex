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
import ModalPop from './components/ModalPop/ModalPop'

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
       <Navbar />
        <Switch>
          <div className="container mt-4">
            <Route path='/' component={Toastify} />
            <Route path='/modal' component={ModalPop} />
            <Route path='/crop' component={Crop} />
          </div>

      </Switch>
      </Router>
    </div>
  );
}
export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/common/Header'
import Navbar from './components/common/Navbar';

import Toastify from './components/Toastify/Toastify'
import ModalPop from './components/ModalPop/ModalPop'
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
       <Navbar />
        <Switch>
          <div className="container mt-4">
            <Route exact path='/' component={Toastify} />
            <Route path='/modal' component={ModalPop} />
            <Route path='/modal' component={DarkMode} />
            
          </div>

      </Switch>
      </Router>
    </div>
  );
}
export default App;

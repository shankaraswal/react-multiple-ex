import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/common/Header'
import Navbar from './components/common/Navbar';
import CompList from './components/common/CompList'
import Toastify from './components/Toastify/Toastify'
import ModalPop from './components/ModalPop/ModalPop'
import DarkMode from './components/DarkMode/DarkMode';
import ScreenCapture from './components/ScreenCapture/ScreenCaptureMain';
import MemberA from './components/Hoc/MemberA';
import MemberB from './components/Hoc/MemberB';

import WrapCompA from './components/HocComp/WrapCompA';
import WrapCompB from './components/HocComp/WrapCompB';
import WrapCompC from './components/HocComp/WrapCompC';
import Ref from './components/Ref/Ref';
import PureComp from './components/PureComp/PureComp';
import GetDerived from './components/GetDerived/ParentComp'

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
       <Navbar />
        <Switch>
            <Route exact path='/' component={CompList} />
            <Route exact path='/toast' component={Toastify} />
            <Route path='/modal' component={ModalPop} />
            <Route path='/dark' component={DarkMode} />
            <Route path='/crop' component={ScreenCapture} />
            <Route path='/hoc' component={MemberA} />
            <Route path='/mema' component={MemberA} />
            <Route path='/memb' component={MemberB} />

            <Route path='/hoca' component={WrapCompA} />
            <Route path='/hocb' component={WrapCompB} />
            <Route path='/hocc' component={WrapCompC} />
            <Route path='/ref' component={Ref} />
            <Route path="/purecomp" component={ PureComp} />
            <Route path="/getderived" component={ GetDerived} />
      </Switch>
      </Router>
    </div>
  );
}
export default App;

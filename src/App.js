import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ReduxOnly from './reduxOnly/index';
import ReduxInReact from './reduxInReact/index';
import ReduxInReactMiddleware from './reduxInReactMiddleware/index';
import ReduxWithReactRedux from './reduxWithReactRedux/index';

import './App.css';

const Main =()=> <div>Main</div>

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/redux-only" component={ReduxOnly} />
        <Route exact path="/redux-inreact" component={ReduxInReact} />
        <Route exact path="/redux-inreact-middleware" component={ReduxInReactMiddleware} />
        <Route exact path="/redux-with-reactRedux" component={ReduxWithReactRedux} />

      </div>
      </Router>  
    );
  }
}

export default App;

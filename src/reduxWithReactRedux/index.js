import React, { Component} from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './app/App';
import { createStore, applyMiddleware } from 'redux';
import { manageCompany } from './app/redux';

const store = createStore(manageCompany,applyMiddleware(thunk))

class ReduxWithReactRedux extends Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default ReduxWithReactRedux;




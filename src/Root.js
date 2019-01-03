import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './web/App';
import MobileApp from './mobile/App';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {process.env.REACT_APP_MOBILE ? <MobileApp /> : <App />}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;

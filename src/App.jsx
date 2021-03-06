import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './scss/main';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div> hello world </div>
        </Router>
      </Provider>
    );
  }
  
}
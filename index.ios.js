import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './src/reducers/index';
import Snapdoc from './src/containers/SnapdocContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Snapdoc />
      </Provider>
    );
  };
};


AppRegistry.registerComponent('snapdoc', () => App);

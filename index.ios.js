import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import Snapdoc from './src/containers/SnapdocContainer';
import configureStore from './src/store/configureStore';

const store = configureStore()

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

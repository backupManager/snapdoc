import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SnapDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SnapDoc</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('snapdoc', () => SnapDoc);

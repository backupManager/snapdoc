import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Cabinet from './views/cabinet.ios.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SnapDoc extends Component {
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  };

  displayName: 'TabBarExample';

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  };

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
          tintColor="#3498db"
          barTintColor="#ecf0f1">
          <Icon.TabBarItemIOS
            title="Files"
            iconName="folder"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}>
            {this._renderContent('#414A8C', 'Blue Tab')}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Camera"
            iconName="photo-camera"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
                notifCount: this.state.notifCount + 1,
              });
            }}>
            {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Settings"
            iconName="settings"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
                presses: this.state.presses + 1
              });
            }}>
            {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('snapdoc', () => SnapDoc);

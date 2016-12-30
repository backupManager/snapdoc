import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FileList from './views/fileList.ios.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SnapDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cameraTab'
    };
  };

  _renderContent() {
    return (<FileList></FileList>);
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
            selected={this.state.selectedTab === 'filesTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'filesTab',
              });
            }}>
            {this._renderContent()}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Camera"
            iconName="photo-camera"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'cameraTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'cameraTab',
                notifCount: this.state.notifCount + 1,
              });
            }}>
            {this._renderContent()}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Settings"
            iconName="settings"
            selected={this.state.selectedTab === 'settingsTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'settingsTab',
                presses: this.state.presses + 1
              });
            }}>
            {this._renderContent()}
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

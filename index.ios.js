import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CameraTab from './views/CameraTab.ios.js';
import FilesTab from './views/FilesTab.ios.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SnapDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'filesTab'
    };
  };

  _renderContent() {
    switch (this.state.selectedTab) {
      case "filesTab":
        return <FilesTab style={styles.tabContent}></FilesTab>;
      case "cameraTab":
        return <CameraTab style={styles.tabContent}></CameraTab>;
      case "settingsTab":
        return <View style={styles.tabContent}></View>;
      default:
        return <View style={styles.tabContent}></View>;
    }
  };

  render() {
    return (
      <TabBarIOS
        tintColor="#3498db"
        barTintColor="#ecf0f1">
        <Icon.TabBarItemIOS
          title="Files"
          iconName="ios-folder"
          selected={this.state.selectedTab === "filesTab"}
          onPress={() => {
            this.setState({
              selectedTab: "filesTab",
            });
          }}>
          {this._renderContent()}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Camera"
          iconName="ios-camera"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === "cameraTab"}
          onPress={() => {
            this.setState({
              selectedTab: "cameraTab"
            });
          }}>
          {this._renderContent()}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName="ios-settings"
          selected={this.state.selectedTab === 'settingsTab'}
          onPress={() => {
            this.setState({
              selectedTab: "settingsTab",
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent()}
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {},
});

AppRegistry.registerComponent('snapdoc', () => SnapDoc);

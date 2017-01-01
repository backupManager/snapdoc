import React, { Component } from 'react';
import {
  TabBarIOS,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CameraTab from '../components/CameraTab.ios.js';
import FilesTab from '../components/FilesTab.ios.js';
import SettingsTab from '../components/SettingsTab.ios.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Snapdoc extends Component {
  render() {
    return (
      <TabBarIOS
        tintColor="#3498db"
        barTintColor="#ecf0f1">
        <Icon.TabBarItemIOS
          title="Files"
          iconName="ios-folder"
          selected={this.props.activeTab === "filesTab"}
          onPress={() => {
            console.log("Pressed!")
            console.log(this.props)
            this.props.onNewTabSelected("filesTab")
          }}>
          <FilesTab></FilesTab>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Camera"
          iconName="ios-camera"
          selected={this.props.activeTab === "cameraTab"}
          onPress={() => {
            this.props.onNewTabSelected("cameraTab")
          }}>
          <CameraTab></CameraTab>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName="ios-settings"
          selected={this.props.activeTab === 'settingsTab'}
          onPress={() => {
            this.props.onNewTabSelected("settingsTab")
          }}>
          <SettingsTab></SettingsTab>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {},
});

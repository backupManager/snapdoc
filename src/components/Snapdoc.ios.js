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
          selected={this.props.selectedTab === "filesTab"}
          onPress={() => {
            this.props.onNewTabSelected("filesTab")
          }}>
          <FilesTab></FilesTab>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Camera"
          iconName="ios-camera"
          selected={this.props.selectedTab === "cameraTab"}
          onPress={() => {
            this.props.onNewTabSelected("cameraTab")
          }}>
          <CameraTab
            captureInProgress={this.props.captureInProgress}
            onTakePicture={this.props.onTakePicture}>
          </CameraTab>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName="ios-settings"
          selected={this.props.selectedTab === 'settingsTab'}
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

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CameraTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this._camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
              style={styles.cameraButton}
              onPress={this._takePicture.bind(this)}>
              <Icon name="ios-qr-scanner" size={55} color="#95a5a6" />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _takePicture() {
    this._camera.capture()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      });
  }
}

var styles = StyleSheet.create({
  buttonContainer: {
    flexBasis: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50,
    backgroundColor: 'black',
  },
  cameraButton: {
    flex: 0,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
});

module.exports = CameraTab;

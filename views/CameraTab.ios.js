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
import RNFetchBlob from 'react-native-fetch-blob';

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
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}>
          <TouchableHighlight
              activeOpacity={1}
              underlayColor={'transparent'}
              style={styles.cameraButton}
              onPress={this._takePicture.bind(this)}>
              <Icon name="ios-qr-scanner" size={55} color="#95a5a6" />
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  _takePicture() {
    this._camera.capture()
      .then((data) => {
        var image = {
          name: 'image',
          type: 'image/jpeg',
          filename: 'document.jpg',
          data: RNFetchBlob.wrap(data.path)
        };

        var body = new FormData();

        body.append('image', image);

        RNFetchBlob.fetch('POST', 'http://snapdoc.io/files', {
          'Accept': 'application/json',
          'Content-Type': 'application/octet-stream'
        }, [image])
        .then((response) => {
          console.log(response);
          return response.json()
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
      })
      .catch((err) => {
        console.error(err)
      });
  }
}

var styles = StyleSheet.create({
  cameraButton: {
    flex: 0,
    flexDirection: 'row',
    marginBottom: 60,
  },
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
});

module.exports = CameraTab;

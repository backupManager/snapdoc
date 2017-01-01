import React, { Component, PropTypes } from 'react';
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
import Spinner from 'react-native-spinkit';

export default class CameraTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captureInProgress: false,
    };
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
          <View style={styles.container}>
            <Spinner style={styles.spinner}
              isVisible={this.state.captureInProgress}
              size={100}
              type='FadingCircleAlt' color='#2c3e50'/>
          </View>
          <TouchableHighlight
              activeOpacity={0}
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
    this.setState({ captureInProgress: true });
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

        RNFetchBlob.fetch('POST', 'http://www.snapdoc.io/files', {
          'Accept': 'application/json',
          'Content-Type': 'application/octet-stream'
        }, [image])
        .then((response) => {
          console.log(response);
          return response.json()
        })
        .then((data) => {
          console.log(data);
          this.setState({ captureInProgress: false });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ captureInProgress: false });
        });
      })
      .catch((err) => {
        console.error(err)
        this.setState({ captureInProgress: false });
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  spinner: {
    flex: 1,
    marginTop: 200
  },
});

CameraTab.PropTypes = {};

module.exports = CameraTab;

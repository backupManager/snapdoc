import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import DocumentModal from './DocumentModal';
import Icon from 'react-native-vector-icons/Ionicons';
import RNFetchBlob from 'react-native-fetch-blob';
import Spinner from 'react-native-spinkit';

export default class CameraTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DocumentModal
          modalVisible={this.props.modalVisible}
          setModalVisible={this.props.setModalVisible}>
        </DocumentModal>
          <Camera
            ref={(cam) => {
              this._camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}>
            <View style={styles.container}>
              <Spinner style={styles.spinner}
                isVisible={this.props.captureInProgress}
                size={100}
                type='FadingCircleAlt' color='#2c3e50'/>
            </View>
            { this._renderCameraButton() }
          </Camera>
      </View>
    );
  }

  _renderCameraButton() {
    if (!this.props.captureInProgress) {
      return (
        <TouchableHighlight
            activeOpacity={0}
            underlayColor={'transparent'}
            style={styles.cameraButton}
            onPress={() => { this._takePicture() }}>
            <Icon name="ios-qr-scanner" size={55} color="#95a5a6" />
        </TouchableHighlight>
      );
    }
  }

  _takePicture() {
    this.props.onTakePicture(true);
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

        RNFetchBlob.fetch('POST', 'http://192.168.1.6:3000/files', {
          'Accept': 'application/json',
          'Content-Type': 'application/octet-stream'
        }, [image])
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data);
          this.props.onTakePicture(false);
          this.props.setModalVisible(true);
        })
        .catch((error) => {
          console.error(error);
          this.props.onTakePicture(false);
        });
      })
      .catch((err) => {
        console.error(err)
        this.props.onTakePicture(false);
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

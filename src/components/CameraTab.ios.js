import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import DocumentModal from './DocumentModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'react-native-fetch-blob';
import Spinner from 'react-native-spinkit';

export default class CameraTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DocumentModal
          modalVisible={this.props.modalVisible}
          onSave={this._saveDocument.bind(this)}
          setFileName={this.props.setFileName}
          fileName={this.props.fileName}
          fileCategory={this.props.fileCategory}
          setFileCategory={this.props.setFileCategory}
          setFileName={this.props.setFileName}>
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
            <Icon name="circle-thin" size={55} color="#95a5a6" />
        </TouchableHighlight>
      );
    }
  }

  _saveDocument() {
    var image = {
      name: 'image',
      type: 'image/jpeg',
      filename: this.props.fileName,
      data: RNFetchBlob.wrap(this.props.filePath)
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
      this.props.setModalVisible(false);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _takePicture() {
    this.props.onTakePicture(true);
    this._camera.capture()
      .then((data) => {
        this.props.setFilePath(data.path);
        this.props.onTakePicture(false);
        this.props.setModalVisible(true);
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

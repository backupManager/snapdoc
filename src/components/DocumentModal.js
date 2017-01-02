import React, { Component, PropTypes } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DocumentModal extends Component {
  render() {
    return (
      <Modal
        animationType={'fade'}
        style={styles.modal}
        transparent={true}
        visible={this.props.modalVisible}>
        <View style={styles.container}>
          <Text style={styles.label}>Document title</Text>
          <TextInput
            style={styles.textInput}
            editable={true}
            placeholder={'bank statement'}
            autoFocus={true}
            maxLength={75}

          />
          <Button
            style={styles.button}
            onPress={() => { this.props.setModalVisible(false); }}
            title="Save"
            color="#2980b9"
          />
        </View>
      </Modal>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 225,
    marginBottom: 225,
    marginRight: 15,
    marginLeft: 15,
    padding: 25
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 15
  }
});

DocumentModal.PropTypes = {};

module.exports = DocumentModal;

import React, { Component, PropTypes } from 'react';
import {
  Button,
  Modal,
  Picker,
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
          <Text style={styles.label}>Document Title</Text>
          <TextInput
            style={styles.textInput}
            editable={true}
            placeholder={'bank statement'}
            autoFocus={true}
            maxLength={75}
            value={this.props.fileName}
            onChangeText={(fileName) => this.props.setFileName(fileName)}/>
          <Text style={styles.label}>Category</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.props.fileCategory}
            onValueChange={(value) => { this.props.setFileCategory(value); }}>
            <Picker.Item label="Business" value="business" />
            <Picker.Item label="Education" value="education" />
            <Picker.Item label="Finance" value="finance" />
            <Picker.Item label="Legal" value="legal" />
            <Picker.Item label="Personal" value="personal" />
            <Picker.Item label="Residential" value="residential" />
            <Picker.Item label="Vehicle" value="vehicle" />
          </Picker>
          <Button
            style={styles.button}
            onPress={() => { this.props.onSave(); }}
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
    marginTop: 125,
    marginBottom: 125,
    marginRight: 15,
    marginLeft: 15,
    padding: 25
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  picker: {
    flex: 1,
    width: 150,
    height: 30
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

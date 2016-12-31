import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var REQUEST_URL = "http://snapdoc.io/files";

export default class FilesTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
      }),
      loaded: false,
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.files),
          loaded: true,
        });
      })
      .done();
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFile}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading files...
        </Text>
      </View>
    );
  }

  renderFile(file) {
    return (
      <View style={styles.container}>
        <Icon name="ios-document-outline"
          style={styles.thumbnail}
          size={50}
          color="#2c3e50" />
        <Text style={styles.title}>{file.originalname}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#bdc3c7',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  listView: {
    paddingTop: 20,
  },
  thumbnail: {
    flex: 1,
    textAlign: 'center',
  },
  title: {
    flex: 4,
    fontSize: 20,
    textAlign: 'center',
  },
});

module.exports = FilesTab;

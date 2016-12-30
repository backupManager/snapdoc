import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

var REQUEST_URL = "";

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
    // fetch(REQUEST_URL)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(responseData.categories),
    //       loaded: true,
    //     });
    //   })
    //   .done();
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading categories...
        </Text>
      </View>
    );
  }

  renderMovie() {
    return (
      <View style={styles.container}></View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

module.exports = FilesTab;
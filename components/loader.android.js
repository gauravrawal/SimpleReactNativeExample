import React, { Component, ProgressBarAndroid } from 'react-native';

class Loader extends Component {
  render() {
    return <ProgressBarAndroid indeterminate={true} />
  }
}

export default Loader;

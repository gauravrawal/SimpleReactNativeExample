import React, { Component, ActivityIndicatorIOS } from 'react-native';

class Loader extends Component {
  render() {
    return <ActivityIndicatorIOS animating={true} size={'large'} />
  }
}

export default Loader;

import React, { Component, Image, StyleSheet, Text, View } from 'react-native';
import Loader from './loader';

class PokemonSprite extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
    fetch(`http://pokeapi.co${this.props.url}`)
      .then((sprite) => sprite.json())
      .then((sprite) => this.setState({ sprite }))
      .catch((err) => console.log(err));
  }

  render() {
    const { sprite } = this.state;

    if (!sprite) { return <View style={styles.imageLoader}><Loader /></View>; }

    return (
      <Image style={styles.image} source={{uri: `http://pokeapi.co${sprite.image}`}} />
    );
  }
}

const size = 150;
const styles = StyleSheet.create({
  imageLoader: {
    width: size,
    height: size,
    justifyContent: 'center'
  },
  image: {
    width: size,
    height: size,
  }
});

export default PokemonSprite;

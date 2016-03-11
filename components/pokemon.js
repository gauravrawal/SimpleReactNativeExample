import React, { Component, Image, StyleSheet, Text, View } from 'react-native';
import api from '../api';
import PokemonSprite from './pokemon-sprite';
import Loader from './loader';

class Pokemon extends Component {
  renderStat(title, value) {
    return (
      <View style={styles.row}>
        <Text style={styles.row_title}>{title}</Text>
        <Text style={styles.row_value}>{value}</Text>
      </View>
    );
  }

  render() {
    const { pokemon } = this.props;
    console.log(this.props);

    return (
      <View style={styles.container}>
        <PokemonSprite url={pokemon.sprites[0].resource_uri} />
        <Text style={styles.name}>{pokemon.name}</Text>
        { this.renderStat('Attack', pokemon.attack) }
        { this.renderStat('Defense', pokemon.defense) }
        { this.renderStat('Speed', pokemon.speed) }
        { this.renderStat('Height', pokemon.height) }
        { this.renderStat('Weight', pokemon.weight) }
        { this.renderStat('Health Points', pokemon.hp) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  row_title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 150
  },

  row_value: {
    fontSize: 16,
    width: 30,
    textAlign: 'right'
  }
});

export default Pokemon;

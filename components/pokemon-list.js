import React, { Component, ListView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loader from './loader';
import api from '../api';

class PokemonList extends Component {
  state = {
    loaded: false,
    dataSource: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows([])
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     loaded: true,
    //     dataSource: this.state.dataSource.cloneWithRows([{
    //     name: "bulbasaur",
    //     url: "http://pokeapi.co/api/v2/pokemon/1/"
    //     },
    //     {
    //     name: "ivysaur",
    //     url: "http://pokeapi.co/api/v2/pokemon/2/"
    //     },
    //     {
    //     name: "venusaur",
    //     url: "http://pokeapi.co/api/v2/pokemon/3/"
    //   }])
    // });
    // }, 1000);
    api.fetchPokemonList()
       .then((pokemons) => {
         this.setState({
           loaded: true,
           dataSource: this.state.dataSource.cloneWithRows(pokemons)
         })
       });
  }

  renderRow = (pokemon) => {
    const { navigator } = this.props;
    const pokemonRoute = { name: 'pokemon', pokemon };
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => navigator.push(pokemonRoute)}
      >
        <Text style={styles.rowText}>{pokemon.name}</Text>
      </TouchableOpacity>
    )
  };

  render() {
    const { loaded } = this.state;

    if (!loaded) { return <Loader />; }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },

  rowText: {
    fontSize: 14,
    color: '#333'
  }
});

export default PokemonList;

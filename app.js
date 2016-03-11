import React, { BackAndroid, Component, Navigator, Platform, StyleSheet, Text, View } from 'react-native';
import Pokemon from './components/pokemon';
import PokemonList from './components/pokemon-list';

const isAndroid = Platform.OS === 'android';

class App extends Component {
  componentDidMount() {
    const { navigator } = this.refs;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      navigator.pop();
      return navigator.getCurrentRoutes().length > 1;
    });
  }

  renderNavigationBar(options) {
    return (
      <View style={styles.navigationBar}>
        { options.hasBackButton && (
          <Text
            style={styles.backButton}
            onPress={() => options.navigator.pop()}
          >
            {'Back'}
          </Text>
        )}
        <Text style={styles.title}>{options.title}</Text>
      </View>
    );
  }

  renderRoute = (route, navigator) => {
    var content, navigationBar;
    switch (route.name) {
      case 'pokemons':
        navigationBar = this.renderNavigationBar({ title: 'Pokémon' });
        content = <PokemonList navigator={navigator} />;
        break;
      case 'pokemon':
        navigationBar = this.renderNavigationBar({ title: route.pokemon.name, hasBackButton: !isAndroid, navigator });
        content = <Pokemon navigator={navigator} pokemon={route.pokemon} />;
    }

    return (
      <View style={styles.navigationContainer}>
        {navigationBar}
        <View style={styles.navigationContent}>
          {content}
        </View>
      </View>
    );
  };

  render() {
    const sceneConfig = isAndroid ? Navigator.SceneConfigs.FloatFromBottom : Navigator.SceneConfigs.HorizontalSwipeJump;
    return (
      <Navigator
        ref='navigator'
        configureScene={() => sceneConfig}
        initialRoute={{name: 'pokemons'}}
        renderScene={this.renderRoute}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },

  navigationContent: {
    flex: 1,
    justifyContent: 'center'
  },

  navigationBar: {
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 16,
    color: '#eee'
  },

  backButton: {
    fontSize: 16,
    position: 'absolute',
    left: 15,
    color: '#111'
  }
});


export default App;

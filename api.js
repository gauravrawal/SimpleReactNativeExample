const baseUrl = 'http://pokeapi.co/api/v1';
import cache from './cache';

export default {
  fetchPokemonList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cache.objects);
      }, 1000);
    });
    return fetch(`${baseUrl}/pokemon?limit=40`)
      .then((res) => res.json())
      .then((pokemon) => pokemon.objects)
  }
};

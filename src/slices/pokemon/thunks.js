import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    const limit = 10;

    // TODO : realizar peticion Http;
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`
    );

    const data = await resp.json();

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};

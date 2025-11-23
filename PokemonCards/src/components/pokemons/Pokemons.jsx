import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const limit = 20;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  const fetchPokemonData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      // console.log(detailedPokemonData);
      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemons(detailedResponses);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const searchData = pokemons.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemons.map((currPokemon) => { */}
            {searchData.map((currPokemon) => {
              return (
                <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pokemons;

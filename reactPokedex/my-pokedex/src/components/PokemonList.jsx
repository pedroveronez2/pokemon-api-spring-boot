import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/pokemon/list?limit=151') 
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de Pokémon', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul style={{listStyle: "none"}}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <span>{pokemon.id}.</span>
            <img src={pokemon.frontImage} alt={pokemon.name} />
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;

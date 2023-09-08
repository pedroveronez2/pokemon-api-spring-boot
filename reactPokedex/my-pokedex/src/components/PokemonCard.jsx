import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="poke-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.frontImage} alt={pokemon.name} />
      <p>Detalhes: <a href={pokemon.url}>{pokemon.name}</a></p>
    </div>
  );
}

export default PokemonCard;

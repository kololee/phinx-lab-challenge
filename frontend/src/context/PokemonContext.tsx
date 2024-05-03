import React, { createContext, useState } from 'react';
import { Pokemon } from '../types/Pokemon';

type PokemonContextType = {
  chosenPokemon: Pokemon;
  choosePokemon: (pokemon: Pokemon) => void;
};

const PokemonContext = createContext({} as PokemonContextType);

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon>({
    id: '',
    name: '',
    attack: 0,
    defense: 0,
    hp: 0,
    speed: 0,
    type: '',
    imageUrl: ''
  });

  const choosePokemon = (pokemon: Pokemon) => {
    setChosenPokemon(pokemon);
  };

  const value = { chosenPokemon, choosePokemon };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
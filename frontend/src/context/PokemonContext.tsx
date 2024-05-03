import React, { createContext, useState } from 'react';
import { Pokemon } from '../types/Pokemon';

type PokemonContextType = {
  chosenPokemon: Pokemon | null;
  choosePokemon: (pokemon: Pokemon) => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | null>(null);

  const choosePokemon = (pokemon: Pokemon) => {
    setChosenPokemon(pokemon);
  };

  const value = { chosenPokemon, choosePokemon };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
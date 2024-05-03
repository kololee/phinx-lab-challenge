import { useContext, useState } from "react";

import { Container } from "@mui/material";
import { pokemon } from "./pokemon";
import { Pokemon } from "./types/Pokemon";
import WinnerBanner from "./components/WinnerBanner";
import { PokemonContext } from "./context/PokemonContext";
import Header from "./components/Header";
import PokemonCardContainer from "./components/PokemonCardContainer";
import PokemonStatsContainer from "./components/PokemonStatsContainer";

function App() {
  const { chosenPokemon } = useContext(PokemonContext) || {};

  const pokemonArray: Pokemon[] = pokemon;
  const [winner, setWinner] = useState<string>('');
  // const [battleStarted, setBattleStarted] = useState<boolean>(false);
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>(undefined);

  const handleStartBattle = () => {
    // setBattleStarted(true);
    setWinner('');
    // Randomly select the second Pokemon
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);
    setPokemon2(pokemonArray[randomIndex]);
    return;
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Header />
        <PokemonCardContainer />
        <WinnerBanner winner={winner} />
        <PokemonStatsContainer chosenPokemon={chosenPokemon} handleStartBattle={handleStartBattle} pokemon2={pokemon2} />
      </Container>
    </>
  );
}

export default App;

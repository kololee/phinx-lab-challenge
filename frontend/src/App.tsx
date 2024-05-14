import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import { Pokemon } from "./types/Pokemon";
import WinnerBanner from "./components/WinnerBanner";
import Header from "./components/Header";
import PokemonCardContainer from "./components/PokemonCardContainer";
import PokemonStatsContainer from "./components/PokemonStatsContainer";
import axios from "axios";

function App() {
  const [pokemonArray, setPokemonArray] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pokemon")
      .then((response) => {
        console.log(response.data);
        setPokemonArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      console.log("PokemonCardContainer unmounted");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [winner, setWinner] = useState<string>("");
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>(undefined);

  const handleStartBattle = (chosenPokemon: Pokemon) => {
    setWinner("");
    // Randomly select the second Pokemon
    const randomIndex = Math.floor(Math.random() * pokemonArray.length || 0);
    setPokemon2(pokemonArray[randomIndex]);
    axios
      .post("http://localhost:3000/pokemon-battle", {
        challenger: String(chosenPokemon.id),
        contender: String(pokemonArray[randomIndex].id),
      })
      .then(
        (response) => {
          console.log(response.data);
          setWinner(response.data.winner.name);
        },
        (error) => {
          console.log(error);
        }
      );
    return;
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Header />
        <PokemonCardContainer pokemonArray={pokemonArray} />
        <WinnerBanner winner={winner} />
        <PokemonStatsContainer
          handleStartBattle={handleStartBattle}
          pokemon2={pokemon2}
        />
      </Container>
    </>
  );
}

export default App;

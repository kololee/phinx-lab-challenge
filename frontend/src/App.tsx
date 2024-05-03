import { useContext } from "react";

import { Button, Container, Grid, Typography } from "@mui/material";
import { pokemon } from "./pokemon";
import { Pokemon } from "./types/Pokemon";
import PokemonCard from "./components/PokemonCard";
import PokemonStats from "./components/PokemonStats";
import WinnerBanner from "./components/WinnerBanner";
import { PokemonContext } from "./context/PokemonContext";

function App() {
  const { chosenPokemon } = useContext(PokemonContext) || {};

  const pokemonArray: Pokemon[] = pokemon;
  // const [winner, setWinner] = useState<string | null>(null);
  // const [battleStarted, setBattleStarted] = useState<boolean>(false);
  // const [pokemon2, setPokemon2] = useState<Pokemon | null>(null);

  const handleStartBattle = () => {
    // setBattleStarted(true);
    // setWinner(null);
    // // Randomly select the second Pokemon
    // const randomIndex = Math.floor(Math.random() * pokemonArray.length);
    // setPokemon2(pokemonArray[randomIndex]);
    return;
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="left" sx={{ mb: 4 }}>
          Battle of Pokemon
        </Typography>
        <Typography variant="h5" align="left">
          Select your Pokemon
        </Typography>

        <Grid container style={{ maxWidth: 960, margin: "auto" }}>
          {pokemonArray.map((pokemon, index) => {
            return (
              <Grid
                item
                key={pokemon.name}
                style={{ width: "20%", paddingLeft: index === 0 ? 0 : 8 }}
              >
                <PokemonCard pokemon={pokemon} />
              </Grid>
            );
          })}
        </Grid>

        <WinnerBanner winner="Pikachu" />

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ mt: 4 }}
        >
          {/* Pokemon 1 Stats */}
          <Grid item xs={1} md={5}>
            <PokemonStats pokemon={chosenPokemon ? chosenPokemon : undefined}/>
          </Grid>

          {/* Start Battle Button */}
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                borderRadius: 1.5,
                boxShadow: 5,
                textTransform: "capitalize",
              }}
              onClick={handleStartBattle}
            >
              <Typography variant="body1" align="center">
                Start Battle
              </Typography>
            </Button>
          </Grid>

          {/* Pokemon 2 Stats */}
          <Grid item xs={1} md={5}>
            <PokemonStats pokemon={pokemonArray[1]} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

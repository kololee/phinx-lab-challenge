// import { useState } from 'react'

import {
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { pokemon } from "./pokemon";
import { Pokemon } from "./types/Pokemon";
import PokemonCard from "./components/PokemonCard";
import PokemonStats from "./components/PokemonStats";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const pokemonArray: Pokemon[] = pokemon;

  const handleStartBattle = () => {
    return;
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="left">
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
          spacing={2}
          sx={{ mt: 4 }}
        >
          {/* Pokemon 1 Stats */}
          <Grid item>
            <PokemonStats pokemon={pokemonArray[0]} />
          </Grid>

          {/* Start Battle Button */}
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 4 }}
              onClick={handleStartBattle}
            >
              Start Battle
            </Button>
          </Grid>

          {/* Pokemon 2 Stats */}
          <Grid item>
            <PokemonStats pokemon={pokemonArray[1]} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

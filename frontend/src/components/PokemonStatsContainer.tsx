import { Grid, Button, Typography } from "@mui/material";
import PokemonStats from "./PokemonStats";
import { Pokemon } from "../types/Pokemon";

type PokemonStatsContainerProps = {
  chosenPokemon: Pokemon;
  handleStartBattle: () => void;
  pokemon2: Pokemon | undefined;
};

const PokemonStatsContainer = ({ chosenPokemon, handleStartBattle, pokemon2 }: PokemonStatsContainerProps) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ mt: 4 }}
    >
      {/* Pokemon 1 Stats */}
      <Grid item xs={1} md={5}>
        <PokemonStats pokemon={chosenPokemon ? chosenPokemon : undefined} />
      </Grid>

      {/* Start Battle Button */}
      <Grid item md={2} sx={{ display: "flex", justifyContent: "center" }}>
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
        <PokemonStats pokemon={pokemon2} />
      </Grid>
    </Grid>
  );
};

export default PokemonStatsContainer;

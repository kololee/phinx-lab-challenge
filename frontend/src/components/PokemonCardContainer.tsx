import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types/Pokemon";

type PokemonCardContainerProps = {
  pokemonArray: Pokemon[];
};

const PokemonCardContainer = ({ pokemonArray }: PokemonCardContainerProps) => {
  return (
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
  );
};

export default PokemonCardContainer;
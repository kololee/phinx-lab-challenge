import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../types/Pokemon";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const { choosePokemon } = useContext(PokemonContext);

  const handleClick = () => {
    choosePokemon(pokemon);
  };
  
  return (
    <Card sx={{ maxWidth: 180, mt: 4, p: 1, boxShadow: 5, borderRadius: 1.5, marginTop: 2, cursor: 'pointer' }} onClick={handleClick}>
      <CardMedia
        component="img"
        height="140"
        image={pokemon.imageUrl}
        alt={pokemon.name}
      />
      <CardContent style={{ padding: 1 }}>
        <Typography variant="body1">{pokemon.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../types/Pokemon";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Card sx={{ maxWidth: 180, mt: 4, p: 1, boxShadow: 5, borderRadius: 1.5, marginTop: 2 }}>
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

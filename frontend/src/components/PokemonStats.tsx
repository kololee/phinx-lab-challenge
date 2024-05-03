import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Pokemon } from "../types/Pokemon";

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Card sx={{ maxWidth: "180", p: 1, boxShadow: 5, borderRadius: 1.5 }}>
      <CardMedia
        component="img"
        height="250"
        image={pokemon.imageUrl}
        alt={pokemon.name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h5" align="left">
          {pokemon.name}
        </Typography>
        <Divider />

        <Box key={pokemon.hp} sx={{ mt: 2 }}>
          <Typography variant="body2">HP</Typography>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(pokemon.hp / 10) * 100}
          />
        </Box>
        <Box key={pokemon.attack} sx={{ mt: 2 }}>
          <Typography variant="body2">Attack</Typography>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(pokemon.attack / 10) * 100}
          />
        </Box>
        <Box key={pokemon.defense} sx={{ mt: 2 }}>
          <Typography variant="body2">Defense</Typography>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(pokemon.defense / 10) * 100}
          />
        </Box>
        <Box key={pokemon.speed} sx={{ mt: 2 }}>
          <Typography variant="body2">Speed</Typography>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(pokemon.speed / 10) * 100}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonStats;

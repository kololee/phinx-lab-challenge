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

const PokemonStats = ({ pokemon }: { pokemon?: Pokemon }) => {
  const stats = [
    { name: "HP", value: pokemon ? pokemon.hp : 0 },
    { name: "Attack", value: pokemon ? pokemon.attack : 0 },
    { name: "Defense", value: pokemon ? pokemon.defense : 0 },
    { name: "Speed", value: pokemon ? pokemon.speed : 0 },
  ];

  return (
    <Card sx={{ maxWidth: "180", p: 1, boxShadow: 5, borderRadius: 1.5 }}>
      <CardMedia
        component="img"
        height="250"
        image={pokemon ? pokemon.imageUrl : "./src/assets/pokemon.png"}
        alt={pokemon ? pokemon.name : ""}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h5" align="left">
          {pokemon ? pokemon.name : 0}
        </Typography>
        <Divider />

        {stats.map((stat) => (
          <Box key={stat.name} sx={{ mt: 2 }}>
            <Typography variant="body2">{stat.name}</Typography>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={(stat.value / 10) * 100}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default PokemonStats;

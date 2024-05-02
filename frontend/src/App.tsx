// import { useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { pokemon } from "./pokemon";

function App() {
  const pokemonArray: {
    id: string;
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    type: string;
    imageUrl: string;
  }[] = pokemon;

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
                <Card sx={{ maxWidth: 180, mt: 4, p: 1, boxShadow: 5 }}>
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
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            height: 60,
            mt: 4,
            backgroundColor: "info.main",
            border: 1,
            borderRadius: 1.5,
            boxShadow: 5,
            display: "flex",
            paddingLeft: 2,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography fontSize="1.5rem">Pikachu wins!</Typography>
        </Box>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 4 }}
        >
          {/* Pokemon 1 Stats */}
          <Grid item>
            <Card sx={{ maxWidth: '180', p: 1, boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="140"
                image={pokemonArray[0].imageUrl}
                alt={pokemonArray[0].name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {pokemonArray[0].name}
                </Typography>
                <Divider />

                <Box key={pokemonArray[0].hp} sx={{ mt: 2 }}>
                  <Typography variant="body2">HP</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[0].hp / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>
                <Box key={pokemonArray[0].attack} sx={{ mt: 2 }}>
                  <Typography variant="body2">Attack</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[0].attack / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>
                <Box key={pokemonArray[0].defense} sx={{ mt: 2 }}>
                  <Typography variant="body2">Defense</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[0].defense / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>
                <Box key={pokemonArray[0].speed} sx={{ mt: 2 }}>
                  <Typography variant="body2">Speed</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[0].speed / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>

              </CardContent>
            </Card>
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
            <Card sx={{ maxWidth: '180', p: 1, boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="140"
                image={pokemonArray[1].imageUrl}
                alt={pokemonArray[1].name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {pokemonArray[1].name}
                </Typography>
                <Divider />
                
                <Box key={pokemonArray[1].hp} sx={{ mt: 2 }}>
                  <Typography variant="body2">HP</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[1].hp / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>
                <Box key={pokemonArray[1].attack} sx={{ mt: 2 }}>
                  <Typography variant="body2">Attack</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[1].attack / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>
                <Box key={pokemonArray[1].defense} sx={{ mt: 2 }}>
                  <Typography variant="body2">Defense</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[1].defense / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>
                <Box key={pokemonArray[1].speed} sx={{ mt: 2 }}>
                  <Typography variant="body2">Speed</Typography>
                  <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(pokemonArray[1].speed / 10) * 100} // Assuming 255 is the maximum stat value
                  />
                </Box>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

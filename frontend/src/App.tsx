// import { useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" align="left">
            Battle of Pokemon
          </Typography>
          <Typography variant="h5" align="left">
            Select your Pokemon
          </Typography>

          <Card sx={{ maxWidth: 180, mt: 4, p: 1, boxShadow: 5 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="Bulbasaur"
            />
            <CardContent style={{ padding: 1 }}>
              <Typography variant="body1">Bulbasaur</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default App;

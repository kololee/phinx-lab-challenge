import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography variant="h4" align="left" sx={{ mb: 4 }}>
        Battle of Pokemon
      </Typography>
      <Typography variant="h5" align="left">
        Select your Pokemon
      </Typography>
    </>
  );
};

export default Header;

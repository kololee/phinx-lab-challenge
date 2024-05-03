import { Box, Typography } from "@mui/material";

const WinnerBanner = ({ winner }: { winner?: string }) => {
  const bannerStyle = {
    height: 60,
    mt: 4,
    display: "flex",
    paddingLeft: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  }

  const winnerStyle = {
    ...bannerStyle,
    backgroundColor: "info.main",
    border: 1,
    borderRadius: 1.5,
    boxShadow: 5,
  }

  const noWinnerYet = {
    ...bannerStyle,
    backgroundColor: '#FFFFFF'
  }

  return (
    <Box
      sx={{ ...(winner ? winnerStyle : noWinnerYet) }}
    >
      <Typography fontSize="1.5rem">{winner ? `${winner} wins!` : ``}</Typography>
    </Box>
  );
};

export default WinnerBanner;

import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

const SpinnerPage: FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bgcolor: "white",
        top: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ color: "gray.light" }} />
    </Box>
  );
};

export default SpinnerPage;

import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box
      bgcolor="gray.lighter"
      sx={{
        padding: 3,
        background: "#f5f5f5",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      <Typography color="gray.main">Created by @hleppps</Typography>
    </Box>
  );
};

export default Footer;

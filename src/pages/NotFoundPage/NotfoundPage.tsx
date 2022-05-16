import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../constants/pagesConstants";

const NotFoundPage: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase" }}
        color="primary"
      >
        PAGE NOT FOUND!
      </Typography>
      <Button href={HOME_PAGE.href}>
        <Typography variant="caption">{HOME_PAGE.title}</Typography>
      </Button>
    </Box>
  );
};

export default NotFoundPage;

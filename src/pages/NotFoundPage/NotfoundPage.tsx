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
      <Box marginTop={2}>
        <Button component={Link} to={HOME_PAGE.href} variant="outlined">
          <Typography variant="caption">GO {HOME_PAGE.title}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;

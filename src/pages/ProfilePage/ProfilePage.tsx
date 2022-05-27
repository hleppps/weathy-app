import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Container from "../../components/UI/Container";

const ProfilePage: FC<{ userName: string }> = ({ userName }) => {
  const [name, surname] = userName.split(" ");

  return (
    <Container>
      <Box textAlign="center">
        <Typography my={5} color="primary" variant="h3">
          My Profile
        </Typography>
        <Box>
          <Typography component="span" variant="caption" color="gray.main">
            name:{" "}
          </Typography>
          <Typography
            component="span"
            color="primary.dark"
            variant="h5"
            textTransform="uppercase"
          >
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography component="span" variant="caption" color="gray.main">
            surname:{" "}
          </Typography>
          <Typography
            component="span"
            textTransform="uppercase"
            color="primary.dark"
            variant="h5"
          >
            {surname}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/RegisterForm";
import Container from "../../components/UI/Container";
import { LOGIN_PAGE } from "../../constants/pagesConstants";

const RegisterPage: FC = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography my={1} color="primary" variant="h4" fontWeight="bold">
          Register a Weathy Account
        </Typography>
        <Typography my={1} color="secondary" variant="body1">
          Welcome! We are nice to meet you.
        </Typography>
        <Box width={1 / 2} my={1}>
          <RegisterForm />
        </Box>
        <Typography
          my={1}
          color="primary"
          component={Link}
          to={LOGIN_PAGE.href}
        >
          Already have an account? Login now
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;

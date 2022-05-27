import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
import Container from "../../components/UI/Container";
import { REGISTER_PAGE } from "../../constants/pagesConstants";

const LoginPage: FC = () => {
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
          Sign in to Weathy
        </Typography>
        <Typography my={1} color="secondary" variant="body1">
          Welcome back! Please sign in.
        </Typography>
        <Box width={1 / 2} my={1}>
          <LoginForm />
        </Box>
        <Typography
          my={1}
          color="primary"
          component={Link}
          to={REGISTER_PAGE.href}
        >
          Don&apos;t have an account? Register now
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;

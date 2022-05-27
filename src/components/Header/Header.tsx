import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "reactfire";
import {
  LOGIN_PAGE,
  PAGES,
  PROFILE_PAGE,
  REGISTER_PAGE,
} from "../../constants/pagesConstants";
import { getInitials } from "../../utils";
import { logoutUser } from "../../utils/authUtils";
import Container from "../UI/Container";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

interface HeaderProps {
  signedIn: boolean;
  userName: string;
}

const Header: FC<HeaderProps> = ({ signedIn, userName }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const auth = useAuth();

  const isUserSignedIn = signedIn && userName;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUserHandler = () => {
    logoutUser(auth);
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <HeaderDesktop pages={PAGES} />
          <HeaderMobile
            pages={PAGES}
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />

          {isUserSignedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>{getInitials(userName)}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  component={Link}
                  to={PROFILE_PAGE.href}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">
                    {PROFILE_PAGE.title}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={logoutUserHandler}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {!isUserSignedIn && (
            <ButtonGroup color="secondary">
              <Button
                component={Link}
                to={LOGIN_PAGE.href}
                sx={{ color: "white" }}
              >
                {LOGIN_PAGE.title}
              </Button>
              <Button
                component={Link}
                to={REGISTER_PAGE.href}
                sx={{ color: "white" }}
              >
                {REGISTER_PAGE.title}
              </Button>
            </ButtonGroup>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

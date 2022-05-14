import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import { PROJECT_NAME } from "../../constants";
import { PagesData } from "../../types/pagesTypes";
import styles from "./Header.module.scss";

interface HeaderMobileProps {
  pages: PagesData;
  anchorElNav: HTMLElement | null;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({
  pages,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <Link key={page.id} className={styles.navLink} to={page.href}>
              <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" color="black">
                  {page.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          alignItems: "center",
        }}
      >
        <IconButton size="large">
          <img src={logoImage} className={styles.logo} alt="logo" />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
        >
          {PROJECT_NAME}
        </Typography>
      </Box>
    </>
  );
};

export default HeaderMobile;

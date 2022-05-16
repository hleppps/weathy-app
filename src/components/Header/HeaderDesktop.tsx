import { Button, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import { PROJECT_NAME } from "../../constants";
import { HOME_PAGE } from "../../constants/pagesConstants";
import { PagesData } from "../../types/pagesTypes";
import styles from "./Header.module.scss";

const HeaderDesktop: FC<{ pages: PagesData }> = ({ pages }) => {
  return (
    <>
      <Box
        sx={{
          mr: 5,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
        <IconButton size="large" component={Link} to={HOME_PAGE.href}>
          <img src={logoImage} className={styles.logo} alt="logo" />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          {PROJECT_NAME}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            component={Link}
            key={page.id}
            sx={{ color: "white" }}
            to={page.href}
          >
            <Typography variant="caption">{page.title}</Typography>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default HeaderDesktop;

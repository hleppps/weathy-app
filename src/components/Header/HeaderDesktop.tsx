import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import { PROJECT_NAME } from "../../constants";
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
        <IconButton size="large">
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
          <Link key={page.id} className={styles.navLink} to={page.href}>
            <Typography variant="caption">{page.title}</Typography>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default HeaderDesktop;

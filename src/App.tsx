import { Box } from "@mui/material";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageBody from "./components/PageBody";
import { GALLERY_PAGE, HOME_PAGE, NEWS_PAGE } from "./constants/pagesConstants";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <PageBody>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={HOME_PAGE.href} element={<HomePage />} />
          <Route path={NEWS_PAGE.href} element={<NewsPage />} />
          <Route path={GALLERY_PAGE.href} element={<GalleryPage />} />
        </Routes>
      </PageBody>
      <Footer />
    </Box>
  );
};

export default App;

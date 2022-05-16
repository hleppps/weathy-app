import { Box } from "@mui/material";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
// import { getWeatherForecast } from "./service/weatherService";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={HOME_PAGE.href} element={<HomePage />} />
          <Route path={NEWS_PAGE.href} element={<NewsPage />} />
          <Route path={GALLERY_PAGE.href} element={<GalleryPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

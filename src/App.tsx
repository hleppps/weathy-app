import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
// import { getWeatherForecast } from "./service/weatherService";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

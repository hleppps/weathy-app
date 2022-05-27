import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  GALLERY_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  NEWS_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
} from "../constants/pagesConstants";
import GalleryPage from "../pages/GalleryPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBody from "../components/PageBody";

interface RouterProps {
  signedIn: boolean;
  userName: string;
}

const Router: FC<RouterProps> = ({ signedIn, userName }) => {
  return (
    <>
      <Header signedIn={signedIn} userName={userName} />
      <PageBody>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={HOME_PAGE.href} element={<HomePage />} />
          <Route path={NEWS_PAGE.href} element={<NewsPage />} />
          <Route path={GALLERY_PAGE.href} element={<GalleryPage />} />
          <Route
            path={PROFILE_PAGE.href}
            element={
              signedIn ? <ProfilePage userName={userName} /> : <LoginPage />
            }
          />
          <Route
            path={LOGIN_PAGE.href}
            element={
              signedIn ? <Navigate to={HOME_PAGE.href} /> : <LoginPage />
            }
          />
          <Route
            path={REGISTER_PAGE.href}
            element={
              signedIn ? <Navigate to={HOME_PAGE.href} /> : <RegisterPage />
            }
          />
        </Routes>
      </PageBody>
      <Footer />
    </>
  );
};

export default Router;

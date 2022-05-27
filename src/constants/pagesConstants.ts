import { PageItem, PagesData } from "../types/pagesTypes";

export const HOME_PAGE: PageItem = { id: 1, title: "Home", href: "/" };

export const NEWS_PAGE: PageItem = { id: 2, title: "News", href: "/news" };

export const GALLERY_PAGE: PageItem = {
  id: 3,
  title: "Gallery",
  href: "/gallery",
};

export const LOGIN_PAGE: PageItem = {
  id: 4,
  title: "Login",
  href: "/login",
};

export const REGISTER_PAGE: PageItem = {
  id: 5,
  title: "Register",
  href: "/register",
};

export const PROFILE_PAGE: PageItem = {
  id: 6,
  title: "Profile",
  href: "/profile",
};

export const PAGES: PagesData = [HOME_PAGE, NEWS_PAGE, GALLERY_PAGE];

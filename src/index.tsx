import { ThemeProvider } from "@mui/material/styles";
import { getAuth } from "firebase/auth";
import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import { firebaseConfig } from "./constants/firebaseConstants";
import "./index.css";
import theme from "./theme";

const FirebaseAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const auth = getAuth(useFirebaseApp());
  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseAuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
);

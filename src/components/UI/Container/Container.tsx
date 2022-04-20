import { Container as MUIContainer } from "@mui/material";
import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <MUIContainer>{children}</MUIContainer>;
};

export default Container;

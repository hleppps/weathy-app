import { Box } from "@mui/system";
import { FC, ReactNode } from "react";

const PageBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <Box py={2}>{children}</Box>;
};

export default PageBody;

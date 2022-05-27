import { Box } from "@mui/material";
import { FC } from "react";
import { useSigninCheck } from "reactfire";
import SpinnerPage from "./pages/SpinnerPage";
import Router from "./Router";

const App: FC = () => {
  const { data: signInData, status: signInStatus } = useSigninCheck();

  if (signInStatus === "loading") {
    return <SpinnerPage />;
  }

  if (signInStatus === "error") {
    return null;
  }

  const userName = signInData?.user?.displayName as string;
  const signedIn = signInData?.signedIn;

  // It's even not a kostil, it's an invalidnaya kolyaska
  if (signedIn && !userName) {
    signInData.user.reload();
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Router signedIn={signedIn} userName={userName} />
    </Box>
  );
};

export default App;

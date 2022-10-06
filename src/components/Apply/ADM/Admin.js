import { Grid } from "@mui/material";
import { useContext } from "react";
import { createContext, useState } from "react";
import { AppContext } from "../../../App";
import Login from "./Login";
import Tabs from "./Tabs/Tabs";
export const AdminContext = createContext();
export default function Admin() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { width } = useContext(AppContext);
  return (
    <>
      <AdminContext.Provider
        value={{ signedIn: isSignedIn, setIsSignedIn: setIsSignedIn }}
      >
        {!isSignedIn && (
          <>
            <Grid container justifyContent={"center"} mt={10}>
              <Grid item>
                <Login />
              </Grid>
            </Grid>
          </>
        )}
        {isSignedIn && (
          <>
            <Grid container justifyContent={"center"} pt={10}>
              <Grid item sx={{ width: width > 1200 ? "90%" : "100%" }}>
                <Tabs />
              </Grid>
            </Grid>
          </>
        )}
      </AdminContext.Provider>
    </>
  );
}

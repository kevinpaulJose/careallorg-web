import { Grid } from "@mui/material";
import { localTheme } from "../theme";

export default function Footer() {
  return (
    <>
      <Grid container direction={"column"}>
        <Grid
          item
          sx={{ backgroundColor: localTheme.activeColor, height: 10 }}
        />
        <Grid item sx={{ backgroundColor: localTheme.darkBg, height: 10 }} />
      </Grid>
    </>
  );
}

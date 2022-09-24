import { Grid, Stack } from "@mui/material";

export default function ProductCategory() {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Grid container direction={"row"}>
            <Grid item xs={12} lg={4} sx={{ backgroundColor: "red" }}>
              s
            </Grid>
            <Grid item xs={12} lg={4} sx={{ backgroundColor: "blue" }}>
              s
            </Grid>
            <Grid item xs={12} lg={4} sx={{ backgroundColor: "green" }}>
              s
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

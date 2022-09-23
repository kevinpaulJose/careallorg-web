import { Grid, Stack } from "@mui/material";

import LeftComponent from "./LeftComponent";

export default function TopComponent() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={10}
        mt={0}
      >
        <LeftComponent />
        <Grid item xs={12} md={6}>
          <Stack direction={"row"} justifyContent={"center"}>
            <img
              alt="fastag"
              src={require("../../../assets/fastag/fastag.png")}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

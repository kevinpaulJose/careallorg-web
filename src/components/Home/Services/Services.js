import { Grid, Typography } from "@mui/material";
import { data } from "../../../data";
import { localTheme } from "../../theme";
import CardItem from "./shared/CardItem";

export default function Services() {
  return (
    <>
      <Grid container direction={"row"} justifyContent={"center"} mt={3}>
        <Grid item>
          <Typography variant="h4">Our Services</Typography>
          <Grid container direction={"row"} justifyContent={"center"} mt={1}>
            <Grid item>
              <div
                style={{
                  height: "3px",
                  backgroundColor: localTheme.activeColor,
                  width: 50,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction={"row"}
            spacing={5}
            justifyContent={"center"}
            mt={1}
            pl={10}
            pr={10}
          >
            {data.services.map((v, i) => {
              return <CardItem data={v} key={i} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

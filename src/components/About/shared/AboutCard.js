import { Grid, Paper, Stack, Typography } from "@mui/material";
import { localTheme } from "../../theme";

export default function AboutCard(props) {
  return (
    <>
      <Paper sx={{ backgroundColor: localTheme.secondaryBG, padding: 5 }}>
        <Stack>
          <Grid container direction={"row"} justifyContent={"center"}>
            <Grid item>
              <img src={props.img} width={200} height={160} alt="about" />
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"center"} mt={1}>
            <Grid item>
              <Typography variant="h6">{props.title}</Typography>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"center"} mt={1}>
            <Grid item>
              <Typography variant="body1" textAlign={"center"}>
                {props.content}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </>
  );
}

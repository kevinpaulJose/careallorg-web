import { Grid, Typography } from "@mui/material";

export default function InternalCard(props) {
  return (
    <>
      {props.width > 950 ? (
        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <img src={props.img} alt="fastag" width={70} />
          </Grid>
          <Grid item alignSelf="flex-start">
            <Typography variant="body1" fontSize={20} color="white">
              {props.content}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction={"row"} spacing={2}>
          <Grid item>
            <img src={props.img} alt="fastag" width={50} />
          </Grid>
          <Grid item alignSelf="center">
            <Typography variant="body1" fontSize={16} color="white">
              {props.content}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

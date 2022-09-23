import { Grid, Stack, Typography } from "@mui/material";

export default function AboutProduct(props) {
  return (
    <Grid container direction={"row"} justifyContent={"center"} spacing={10}>
      <Grid item xs={12} md={6}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Stack direction={"column"} justifyContent={"center"}>
            <Typography variant="h4" fontWeight={"bold"}>
              {props.title}
            </Typography>
            <Typography
              variant="caption"
              style={{ width: "80%" }}
              fontSize={20}
              mt={2}
            >
              {props.desc}
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item mt={2} xs={12} md={6}>
        <Stack direction={"row"} justifyContent={"center"}>
          <img src={props.img} alt="fast" width={"150px"} />
        </Stack>
      </Grid>
    </Grid>
  );
}

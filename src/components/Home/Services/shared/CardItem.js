import { Grid, Paper, Typography } from "@mui/material";

export default function CardItem(props) {
  return (
    <>
      <Grid item md={6} sm={12} xs={12} lg={4} xl={3} key={props.key}>
        <Paper elevation={0} className={"pointer"}>
          <Grid container direction={"row"} justifyContent={"center"}>
            <Grid item pt={2}>
              <div
                className="box-shadow"
                style={{
                  padding: "5px",
                  borderRadius: 10,
                }}
              >
                <img
                  src={props.data.img}
                  width={300}
                  height={170}
                  alt={props.data.title}
                  style={{ borderRadius: 10 }}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container direction={"column"} alignContent={"center"} mt={2}>
            <Grid item>
              <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item>
                  <Typography variant="h5">{props.data.title}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item mt={1} pb={2}>
              <Typography
                variant="caption"
                color={"text.secondary"}
                fontSize={"16px"}
              >
                {props.data.subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

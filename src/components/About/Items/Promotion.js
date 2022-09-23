import { Grid, Stack, Typography } from "@mui/material";
import AboutCard from "../shared/AboutCard";

export default function Promotion(props) {
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent="center"
        mt={5}
        pb={5}
        paddingLeft={props.width > 700 ? 30 : 0}
        paddingRight={props.width > 700 ? 30 : 0}
      >
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          sx={{ height: "100" }}
        >
          <Grid item>
            <Typography variant={props.width > 770 ? "h4" : "body1"} noWrap>
              "We love what we do and we love helping others
            </Typography>
            <Typography
              variant={props.width > 770 ? "h4" : "body1"}
              textAlign={"center"}
              noWrap
            >
              succeed at what they love to do."
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          spacing={10}
          mt={5}
          pb={5}
        >
          <Grid item sm={12} md={12} lg={4}>
            <Grid item>
              <AboutCard
                img={require("../../../assets/about/1.png")}
                title={"Who We Are"}
                content={
                  "We are a team, who love partnering with good people and businesses to help them achieve online success."
                }
              />
            </Grid>
          </Grid>
          <Grid item sm={12} md={12} lg={4}>
            <AboutCard
              img={require("../../../assets/about/2.png")}
              title={"Who We Are"}
              content={
                "We are a team, who love partnering with good people and businesses to help them achieve online success."
              }
            />
          </Grid>
          <Grid item sm={12} md={12} lg={4}>
            <AboutCard
              img={require("../../../assets/about/3.png")}
              title={"Who We Are"}
              content={
                "We are a team, who love partnering with good people and businesses to help them achieve online success."
              }
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

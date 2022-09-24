import { Card, Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../theme";

export default function JumbotronImg(props) {
  return (
    <>
      <Card className="pointer">
        <Grid
          container
          direction={"column"}
          alignContent={"center"}
          //   justifyContent={"center"}
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
          mt={4}
        >
          <Grid item>
            <Stack direction={"row"} spacing={4}>
              <img src={props.img} alt="jumbo" width={60} height={60} />
              <Stack direction={"column"} justifyContent="center">
                <Typography
                  variant="h5"
                  color={localTheme.darkBg}
                  fontWeight="bold"
                >
                  {props.title}
                </Typography>
                <Typography>{props.content}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

import { Button, Grid, Stack } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/success";
import { localTheme } from "../theme";

export default function PassOrder() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Stack>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"} mt={10}>
          <Grid item>
            <a href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: 200,
                  backgroundColor: localTheme.activeColor,
                }}
              >
                Return to Home
              </Button>
            </a>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

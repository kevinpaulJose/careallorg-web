import { Grid } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/loading";

export default function Loading() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Lottie options={defaultOptions} height={400} width={400} />
        </Grid>
      </Grid>
    </>
  );
}

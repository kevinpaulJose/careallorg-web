import { Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { localTheme } from "../../theme";

export default function PoweredBy() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const resize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      {width >= 1660 ? (
        <Stack sx={{ backgroundColor: localTheme.secondaryBG }}>
          <Grid container direction={"row"} justifyContent={"center"} mt={10}>
            <Grid item pt={10}>
              <Typography variant="h4">POWERED BY</Typography>
              <Grid
                container
                direction={"row"}
                justifyContent={"center"}
                mt={1}
              >
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
          </Grid>
          <Grid container direction={"row"} justifyContent={"center"}>
            <Grid item>
              <div className="scroll-parent" style={{ width: "50vw" }}>
                <div className="scroll-element primary">
                  <img
                    src={require("../../../assets/powered/aeps_s.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/bbps.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/digital-india.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/uti.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                </div>
                <div
                  className="scroll-element secondary"
                  style={{ marginLeft: 60 }}
                >
                  <img
                    src={require("../../../assets/powered/aeps_s.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/bbps.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/digital-india.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/uti.png")}
                    alt="powered"
                    style={{ margin: 20 }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Stack>
      ) : (
        <Stack sx={{ backgroundColor: localTheme.secondaryBG }}>
          <Grid container direction={"row"} justifyContent={"center"} mt={10}>
            <Grid item pt={10}>
              <Typography variant="h4">POWERED BY</Typography>
              <Grid
                container
                direction={"row"}
                justifyContent={"center"}
                mt={1}
              >
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
          </Grid>
          <Grid container direction={"row"} justifyContent={"center"} mt={4}>
            <Grid item>
              <div className="scroll-parent" style={{ width: "100vw" }}>
                <div className="scroll-element primary">
                  <img
                    src={require("../../../assets/powered/aeps_s.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/bbps.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/digital-india.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/uti.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                </div>
                <div
                  className="scroll-element secondary"
                  //   style={{ marginLeft: 60 }}
                >
                  <img
                    src={require("../../../assets/powered/aeps_s.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/bbps.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/digital-india.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                  <img
                    src={require("../../../assets/powered/uti.png")}
                    alt="powered"
                    // style={{ margin: 20 }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Stack>
      )}
    </>
  );
}

import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { localTheme } from "../../theme";

export default function Benefits() {
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
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} sx={{ backgroundColor: localTheme.darkBg }}>
          s
        </Grid>
      </Grid>
    </>
  );
}

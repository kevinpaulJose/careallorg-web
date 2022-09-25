import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../App";
import { localTheme } from "../../theme";

export default function ProductCategoryCard(props) {
  const { width } = useContext(AppContext);
  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: "white", width: "80%" }}
        pt={5}
        pb={5}
        justifyContent="center"
        mt={width <= 1200 && 3}
        className="pointer"
        onClick={() => {
          if (props.link === "pan") {
            props.reference.current.scrollIntoView({
              behavior: "smooth",
            });
          }
          if (props.link === "fastag") {
            props.reference.current.scrollIntoView({
              behavior: "smooth",
            });
          }
          if (props.link === "dsc") {
            props.reference.current.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        <Grid item>
          <Stack>
            <Grid
              container
              justifyContent={"center"}
              sx={{
                backgroundColor: localTheme.lighterBg,
                borderRadius: 100,
                padding: 2,
              }}
            >
              <Grid item>{props.icon}</Grid>
            </Grid>

            <Typography
              mt={2}
              variant={"h6"}
              fontWeight={"bold"}
              color={localTheme.darkBg}
            >
              {props.title}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

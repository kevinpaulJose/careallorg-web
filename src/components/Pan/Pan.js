import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { localTheme } from "../theme";
import { AppContext } from "../../App";
import ProductCard from "../Shared/ProductCard";

export default function Pan() {
  const { width } = useContext(AppContext);
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          xs={10}
          sx={{ backgroundColor: localTheme.darkBg, borderRadius: 5 }}
        >
          <Stack pt={10} pl={5} pr={5} pb={10}>
            {width > 950 ? (
              <Typography variant="h4" fontWeight={"bold"} color="white">
                PAN Card Services
              </Typography>
            ) : (
              <Typography variant="h5" fontWeight={"bold"} color="white">
                PAN Card Services
              </Typography>
            )}
            <Grid
              container
              direction={"row"}
              alignContent={"center"}
              spacing={5}
              mt={5}
            >
              <Grid item xs={12} md={6} lg={4}>
                <ProductCard
                  contents={["INDIVIDUAL PAN CARD", "(FIRST TIME)"]}
                  desc={
                    "Are you an minor, major, senior citizen or any individual, who do not have a PAN card? Do you want a PAN for the first time?"
                  }
                  link={"pan_new"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductCard
                  contents={["CORRECTIONS TO PAN", "DETAILS"]}
                  desc={
                    "Do you already have a PAN? Does your name or any other details needs to be changed in your existing PAN card?"
                  }
                  link={"pan_correction"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductCard
                  contents={["DAMAGED OR LOST PAN", "CARD"]}
                  desc={
                    "Have you lost or damaged your PAN card? You can apply to Reprint a PAN card with or without changes to your existing PAN details."
                  }
                  link={"pan_damaged"}
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

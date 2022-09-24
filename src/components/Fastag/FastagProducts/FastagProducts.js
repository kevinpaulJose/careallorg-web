import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../App";
import JumbotronImg from "../../Shared/JumbotronImg";
import { localTheme } from "../../theme";
import NewProduct from "./NewProduct";
import ReplacementProduct from "./ReplacementProduct";

export default function FastagProducts() {
  const { width } = useContext(AppContext);
  return (
    <>
      <Grid container justifyContent={"center"} mt={5}>
        <Grid item xs={10}>
          <Grid container direction={"row"}>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  color={localTheme.darkBg}
                  fontWeight={"bold"}
                >
                  Buy FASTag
                </Typography>
                <NewProduct />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2} mt={width <= 1200 && 7}>
                <Typography
                  variant="h5"
                  color={localTheme.darkBg}
                  fontWeight={"bold"}
                >
                  FASTag Replacement
                </Typography>
                <ReplacementProduct />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} mt={4}>
          <JumbotronImg
            img={require("../../../assets/fastag/benefits/phone.png")}
            content={
              "You can have Rs. 1,00,000 in this type of account and there is no capping on reloading of the amount."
            }
            title={"FASTag KYC Update"}
            link={"fastag_update"}
          />
        </Grid>
      </Grid>
    </>
  );
}

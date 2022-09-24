import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../App";
import { localTheme } from "../../theme";
import InternalCard from "./shared/InternalCard";

export default function Benefits() {
  const items = [
    {
      img: require("../../../assets/fastag/benefits/phone.png"),
      contents:
        "Easy to recharge. Simply add money to your Paytm wallet to use FASTag",
    },
    {
      img: require("../../../assets/fastag/benefits/fuel.png"),
      contents: "Saves fuel and commute",
    },
    {
      img: require("../../../assets/fastag/benefits/pay.png"),
      contents:
        "Easy mode of payment, no need to carry cash for toll transactions",
    },
    {
      img: require("../../../assets/fastag/benefits/pay.png"),
      contents:
        "Avail monthly pass at applicable plazas with minimal documentation",
    },
    {
      img: require("../../../assets/fastag/benefits/call.png"),
      contents:
        "24*7 customer support is available on toll free number 1800-120-4210",
    },
    {
      img: require("../../../assets/fastag/benefits/sms.png"),
      contents: "SMS & Email alerts for all toll transactions",
    },
  ];

  const { width } = useContext(AppContext);
  return (
    <>
      <Grid container direction={"row"} justifyContent={"center"}>
        <Grid item xs={10}>
          {/* <Grid container direction={"column"} spacing={3}> */}
          <Grid
            container
            sx={{ backgroundColor: localTheme.darkBg }}
            justifyContent={width > 950 && "center"}
            spacing={4}
            borderRadius={5}
            pb={10}
            pt={10}
          >
            <Grid item xs={12}>
              {width > 950 ? (
                <Typography variant="h4" fontWeight={"bold"} color="white">
                  Benefits of FASTag
                </Typography>
              ) : (
                <Typography variant="h5" fontWeight={"bold"} color="white">
                  Benefits of FASTag
                </Typography>
              )}
            </Grid>
            {items.map((v, i) => (
              <Grid item key={i} md={4} mt={2}>
                <InternalCard width={width} img={v.img} content={v.contents} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>
  );
}

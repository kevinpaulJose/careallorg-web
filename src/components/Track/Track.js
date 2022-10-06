import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { baseURL } from "../../api/baseURL";
import { postData } from "../../api/calls";
import { getApp } from "../Shared/shardVars";
import { localTheme } from "../theme";
import TrackResult from "./Result";

export default function Track() {
  const [loading, setLoading] = useState(false);
  const orderRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [trackDetails, setTrackDetails] = useState(null);

  const trackOrder = () => {
    setLoading(true);
    setTrackDetails(null);
    setErrorMessage(null);
    postData(
      {
        item: getApp(orderRef.current.value),
        order_id: orderRef.current.value.toUpperCase(),
      },
      `${baseURL}/fetch/id`
    )
      .then((response) => {
        console.log(response);
        if (response.data.length === 0) {
          setErrorMessage("Invalid Order ID");
        } else {
          setTrackDetails({
            order_id: response.data[0].order_id,
            status: response.data[0].status,
            type: response.data[0].type,
          });
          setErrorMessage(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErrorMessage("Something went wrong");
        setTrackDetails(null);
      });
  };

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          xs={10}
          sx={{ backgroundColor: "white", borderRadius: 5 }}
          pb={5}
        >
          <Stack>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              color={localTheme.minBold}
              textAlign={"center"}
              mt={6}
            >
              Track Order
            </Typography>
            <Typography
              variant="h4"
              textAlign={"center"}
              color={localTheme.darkSecondary}
              fontSize={18}
              mt={1}
            >
              Track your order here
            </Typography>
            <Grid container justifyContent={"center"} mt={6} ml={-2}>
              <Grid item>
                <Stack direction={"row"} spacing={2}>
                  <img
                    src={require("../../assets/fastag/benefits/phone.png")}
                    alt="phone"
                    width={60}
                  />
                  <TextField
                    // sx={{ marginLeft: 2 }}
                    variant="outlined"
                    label="Order ID"
                    inputRef={orderRef}
                  />
                  <Button
                    onClick={trackOrder}
                    sx={{ textTransform: "none" }}
                    disabled={loading}
                  >
                    {loading ? <CircularProgress /> : "Track"}
                  </Button>
                </Stack>
                {errorMessage && (
                  <Typography
                    textAlign="center"
                    mt={2}
                    sx={{
                      backgroundColor: localTheme.warning,
                      padding: 1,
                      borderRadius: 2,
                    }}
                  >
                    {errorMessage}
                  </Typography>
                )}
                {trackDetails && (
                  <TrackResult
                    order_id={trackDetails.order_id}
                    status={trackDetails.status}
                    type={trackDetails.type}
                  />
                )}
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

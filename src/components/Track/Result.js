import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { baseURL } from "../../api/baseURL";
import { postData } from "../../api/calls";
import { localTheme } from "../theme";

export default function TrackResult(props) {
  const [loading, setLoading] = useState(false);

  const getPaymentLink = async () => {
    setLoading(true);
    postData({ order_id: props.order_id }, `${baseURL}/orders/status`)
      .then((response) => {
        console.log(response.data.payment_link);
        setLoading(false);
        window.location.href = response.data.payment_link;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        mt={2}
        sx={{ backgroundColor: localTheme.darkBg, padding: 2, borderRadius: 4 }}
      >
        <Grid item>
          <Grid container direction={"column"}>
            {/* <Grid item>
              <Typography fontWeight="bold" color="white" fontSize={20}>
                Order ID: {props.order_id}
              </Typography>
            </Grid> */}
            <Grid item>
              <Typography color="white" fontSize={18}>
                Applied for: {props.type}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="white" fontSize={18}>
                Status: {props.status}
              </Typography>
            </Grid>
            {props.status === "Pending Payment" && (
              <Button
                variant="contained"
                sx={{ textTransform: "none", marginTop: 2 }}
                color="success"
                disabled={loading}
                onClick={getPaymentLink}
              >
                {loading ? <CircularProgress color="success" /> : "Pay Now"}
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

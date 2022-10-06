import { Button, Grid } from "@mui/material";

export default function Selection(props) {
  return (
    <>
      <Grid container direction={"row"} spacing={2}>
        <Grid item>
          <Button
            variant={props.selected === "all" ? "contained" : "outlined"}
            sx={{ textTransform: "none", borderRadius: 100 }}
            onClick={() => props.setSelected("all")}
          >
            all
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={
              props.selected === "Order Placed" ? "contained" : "outlined"
            }
            sx={{ textTransform: "none", borderRadius: 100 }}
            onClick={() => props.setSelected("Order Placed")}
          >
            Order Placed
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={
              props.selected === "Pending Payment" ? "contained" : "outlined"
            }
            sx={{ textTransform: "none", borderRadius: 100 }}
            onClick={() => props.setSelected("Pending Payment")}
          >
            Pending Payment
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={props.selected === "Processing" ? "contained" : "outlined"}
            sx={{ textTransform: "none", borderRadius: 100 }}
            onClick={() => props.setSelected("Processing")}
          >
            Processing
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={props.selected === "Dispatched" ? "contained" : "outlined"}
            sx={{ textTransform: "none", borderRadius: 100 }}
            onClick={() => props.setSelected("Dispatched")}
          >
            Dispatched
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={props.selected === "Delivered" ? "contained" : "outlined"}
            sx={{ textTransform: "none", borderRadius: 100 }}
            onClick={() => props.setSelected("Delivered")}
          >
            Delivered
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

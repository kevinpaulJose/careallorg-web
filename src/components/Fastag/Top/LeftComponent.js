import { Button, Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../../theme";

export default function LeftComponent(props) {
  return (
    <Grid item xs={12} md={6}>
      <Stack direction={"row"} justifyContent={"center"}>
        <Stack direction={"column"}>
          <Typography
            variant="h4"
            fontWeight={"100"}
            color={localTheme.minBold}
          >
            FASTag
          </Typography>
          <Typography
            mt={2}
            variant="h3"
            fontWeight={"500"}
            color={localTheme.bold}
          >
            Enjoy Safer &
          </Typography>
          <Typography variant="h3" fontWeight={"500"} color={localTheme.bold}>
            Faster Toll Payments
          </Typography>
          <Stack direction={"row"} spacing={2} mt={5}>
            <Button
              style={{
                textTransform: "none",
                backgroundColor: localTheme.activeColor,
                color: "white",
                fontWeight: "normal",
                fontSize: 18,
                padding: 10,
              }}
              variant="contained"
              onClick={() => {
                props.reference.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Buy Personal FASTag
            </Button>
            <Button
              style={{
                textTransform: "none",
                borderColor: localTheme.activeColor,
                backgroundColor: "white",
                color: localTheme.activeColor,
                fontWeight: "normal",
                fontSize: 18,
                padding: 10,
              }}
              variant="outlined"
            >
              See Other Products
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}

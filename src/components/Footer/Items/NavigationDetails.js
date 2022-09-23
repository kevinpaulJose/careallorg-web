import { Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../../theme";

export default function NavigationDetails() {
  return (
    <>
      <Grid item md={6} sm={12} xs={12} lg={4} xl={3} mt={5}>
        <Stack direction={"column"}>
          <Typography
            color={localTheme.secondaryBG}
            fontWeight="bold"
            variant="h5"
          >
            NAVIGATION
          </Typography>
          <Typography color={localTheme.darkSecondary} mt={2}>
            Services
          </Typography>
          <Typography color={localTheme.darkSecondary} mt={2}>
            Terms & Conditions
          </Typography>
          <Typography color={localTheme.darkSecondary} mt={2}>
            Refund Policy
          </Typography>
          <Typography color={localTheme.darkSecondary} mt={2}>
            Privacy Policy
          </Typography>
        </Stack>
      </Grid>
    </>
  );
}

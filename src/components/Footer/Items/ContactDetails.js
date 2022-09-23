import { Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../../theme";

export default function ContactDetails() {
  return (
    <>
      <Grid item md={6} sm={12} xs={12} lg={4} xl={3} mt={5}>
        <Stack direction={"column"}>
          <Typography
            color={localTheme.secondaryBG}
            fontWeight="bold"
            variant="h5"
          >
            CONTACT ADDRESS
          </Typography>
          <Typography color={localTheme.darkSecondary} mt={2}>
            MARKETING HEAD OFFICE : No. 51/74, First Floor, K.A.P Complex,
            Trivandrum Road, Near Kulavanigarpuram Railway Gate, Palayamkottai,
            Tirunelveli - 627 002. Ph: 0462-4950788, Mobile : 98421 10180 Email
            : Enq @Careall.In
          </Typography>
        </Stack>
      </Grid>
    </>
  );
}

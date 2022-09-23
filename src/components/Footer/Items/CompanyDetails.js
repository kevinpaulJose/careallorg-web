import { Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../../theme";

export default function CompanyDetails() {
  return (
    <>
      <Grid item md={6} sm={12} xs={12} lg={4} xl={4} mt={5}>
        <Stack direction={"column"}>
          <img
            src={require("../../../assets/logo.jpg")}
            width={300}
            height={70}
            alt="Logo"
          />
          <Typography color={localTheme.darkSecondary} mt={2}>
            CAREALL DIGITAL SERVICES is A Multiple Business Service Providing
            Company
          </Typography>
        </Stack>
      </Grid>
    </>
  );
}

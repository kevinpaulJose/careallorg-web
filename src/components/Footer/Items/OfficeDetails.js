import { Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../../theme";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function OfficeDetails() {
  return (
    <>
      <Grid item md={6} sm={12} xs={12} lg={4} xl={3} mt={5}>
        <Stack direction={"column"}>
          <Typography
            color={localTheme.secondaryBG}
            fontWeight="bold"
            variant="h5"
          >
            CORPORATE OFFICE
          </Typography>
          <Stack direction={"row"}>
            <LocationOnIcon
              sx={{
                marginTop: 2,
                marginRight: 1,
                color: localTheme.darkSecondary,
              }}
            />
            <Typography color={localTheme.darkSecondary} mt={2}>
              CORPORATE OFFICE: Shop No.5 First Floor, Pranav Complex, Kasaba
              Hobli, Tumkur Road, Nelamangala Taluk, Bangalore - 562 123
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <LocalPhoneIcon
              sx={{
                marginTop: 2,
                marginRight: 1,
                color: localTheme.darkSecondary,
              }}
            />
            <Typography color={localTheme.darkSecondary} mt={2}>
              9842110180 , 9842110180
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <EmailOutlinedIcon
              sx={{
                marginTop: 2,
                marginRight: 1,
                color: localTheme.darkSecondary,
              }}
            />
            <Typography color={localTheme.darkSecondary} mt={2}>
              info@careall.in
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}

import { Grid, Stack, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { localTheme } from "../../theme";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function MiddleItem() {
  return (
    <>
      <Grid container direction={"row"} justifyContent={"center"}>
        <Grid item padding={10} sm={12} md={4}>
          <Stack direction={"row"} justifyContent={"center"}>
            <LocalPhoneIcon
              sx={{ width: 50, height: 50, color: localTheme.navBG }}
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"center"}>
            <Typography mt={3} color={localTheme.darkSecondary} fontSize={18}>
              +91 9842110180
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={10} sm={12} md={4}>
          <Stack direction={"row"} justifyContent={"center"}>
            <EmailOutlinedIcon
              sx={{ width: 50, height: 50, color: localTheme.navBG }}
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"center"}>
            <a
              href="mailto:info@careall.in"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography mt={3} color={localTheme.darkSecondary} fontSize={18}>
                info@careall.in
              </Typography>
            </a>
          </Stack>
        </Grid>
        <Grid item padding={10} sm={12} md={4}>
          <Stack direction={"row"} justifyContent={"center"}>
            <LocationOnIcon
              sx={{ width: 50, height: 50, color: localTheme.navBG }}
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"center"}>
            <Typography mt={3} color={localTheme.darkSecondary} fontSize={18}>
              CORPORATE OFFICE: Shop No.5 First Floor, Pranav Complex, Kasaba
              Hobli, Tumkur Road, Nelamangala Taluk, Bangalore - 562 123
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

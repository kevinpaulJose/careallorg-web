import { Grid } from "@mui/material";
import { localTheme } from "../theme";
import CompanyDetails from "./Items/CompanyDetails";
import ContactDetails from "./Items/ContactDetails";
import NavigationDetails from "./Items/NavigationDetails";

export default function Footer() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        sx={{ backgroundColor: localTheme.darkBG }}
        justifyContent={"center"}
        padding={5}
        spacing={6}
      >
        <CompanyDetails />
        <ContactDetails />
        <NavigationDetails />
        {/* <OfficeDetails /> */}
      </Grid>
    </>
  );
}

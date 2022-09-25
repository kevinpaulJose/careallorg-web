import { Grid, Stack, Typography } from "@mui/material";
import { localTheme } from "../theme";

export default function Contact() {
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
              Contact Us
            </Typography>
            <Typography
              variant="h4"
              textAlign={"center"}
              color={localTheme.darkSecondary}
              fontSize={18}
              mt={1}
            >
              You can reach Care All customer support at
            </Typography>
            <Grid container justifyContent={"center"} mt={6} ml={-2}>
              <a
                href="tel:9842110180"
                style={{ textDecoration: "none", color: localTheme.minBold }}
              >
                <Grid item>
                  <Stack direction={"row"}>
                    <img
                      src={require("../../assets/phone_icon.png")}
                      alt="phone"
                    />
                    <Typography
                      alignSelf="center"
                      variant="h3"
                      fontWeight={"bold"}
                    >
                      9842-110-180
                    </Typography>
                  </Stack>
                </Grid>
              </a>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

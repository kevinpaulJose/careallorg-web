import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
export default function FormItem() {
  return (
    <>
      <Grid container direction={"row"} justifyContent={"center"}>
        <Grid item padding={10} sm={12} md={12} lg={6}>
          <Stack direction={"row"} justifyContent={"flex-start"}>
            <Typography mt={3} variant={"h4"}>
              Contact Us
            </Typography>
          </Stack>
          <Grid
            container
            direction={"row"}
            justifyContent={"flex-start"}
            spacing={3}
            mt={2}
          >
            <Grid item sx={{ width: "100%" }} sm={12} md={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Your name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sx={{ width: "100%" }} sm={12} md={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            justifyContent={"flex-start"}
            spacing={3}
            sx={{ marginTop: "0px" }}
          >
            <Grid item sx={{ width: "100%" }} sm={12} md={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="me@email.com"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sx={{ width: "100%" }} sm={12} md={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Your subject"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            justifyContent={"flex-start"}
            spacing={3}
            sx={{ marginTop: "0px" }}
          >
            <Grid item sx={{ width: "100%" }} sm={12} md={12} lg={12}>
              <TextField label="Your Message" multiline rows={5} fullWidth />
            </Grid>
          </Grid>
          {/* <Stack justifyContent={"flex-start"}> */}
          <Button variant="contained" color="warning" sx={{ marginTop: 2 }}>
            Send Message
          </Button>
          {/* </Stack> */}
        </Grid>

        <Grid item padding={10} sm={12} md={12} lg={6}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7887.539197424325!2d77.731829!3d8.713416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74ec97ee35d479ca!2sCAREALL%20DIGITAL%20SERVICES!5e0!3m2!1sen!2sin!4v1662378119615!5m2!1sen!2sin"
            width="600"
            height="450"
            // style="border:0"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}

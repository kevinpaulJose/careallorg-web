import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { localTheme } from "../theme";
import FileUploadPage from "./shared/FileUpload";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function PanForm() {
  const { width } = useContext(AppContext);

  const [dob, setDob] = useState("2014-08-18T21:11:54");

  const handleChangeDob = (newValue) => {
    setDob(newValue);
  };

  const currencies = [
    {
      value: "Mr",
      label: "Mr",
    },
    {
      value: "Mrs",
      label: "Mrs",
    },
    {
      value: "Ms",
      label: "Ms",
    },
  ];

  const [currency, setCurrency] = useState("Mr");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Grid container justifyContent={"center"} pt={10} pb={10}>
        <Grid item xs={10}>
          <form>
            <Grid container>
              <Grid item>
                <Typography
                  color={localTheme.darkBg}
                  fontWeight={"bold"}
                  fontSize={22}
                >
                  Personal Details
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              mt={1}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Title
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  fullWidth
                  // id="outlined-select-currency"
                  select
                  value={currency}
                  onChange={handleChange}
                  size={"small"}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Applicant's First Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Applicant's Middle Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Applicant's Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Mobile No
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  type={"number"}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Date of Birth
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={dob}
                    onChange={handleChangeDob}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Email ID
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  type={"email"}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Aadhaar Number
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>

            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Name as per Aadhaar letter / card
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>

            <Grid container mt={12}>
              <Grid item>
                <Typography
                  color={localTheme.darkBg}
                  fontWeight={"bold"}
                  fontSize={22}
                >
                  Family Details
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Father's First Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Father's Middle Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Father's Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  Mother's First Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  type={"number"}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  {`Mother's Middle Name`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  type={"email"}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  {`Mother's Last Name`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  type={"email"}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid container mt={12}>
              <Grid item>
                <Typography
                  color={localTheme.darkBg}
                  fontWeight={"bold"}
                  fontSize={22}
                >
                  Documents Upload
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  {`PAN Card (PDF)`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FileUploadPage />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  {`Aadhaar Card`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FileUploadPage />
              </Grid>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              sx={{ marginTop: "0.3px" }}
            >
              <Grid item xs={12} lg={4}>
                <Typography variant="body1" fontSize={20}>
                  {`Address Proof`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FileUploadPage />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              //   direction={"row"}
              spacing={width > 1200 ? 5 : 1}
              mt={5}
            >
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ backgroundColor: localTheme.darkBg }}
                  fullWidth
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

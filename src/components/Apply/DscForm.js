import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { localTheme } from "../theme";
import FileUploadPage from "./shared/FileUpload";

export default function DscForm() {
  const { width } = useContext(AppContext);

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

  const dscClass = [
    {
      value: "Class 3",
      label: "Class 3",
    },
  ];

  const [currency, setCurrency] = useState("Mr");
  const [dscClassItem, setDscClassItem] = useState("Class 3");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeDsc = (event) => {
    setDscClassItem(event.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Grid container justifyContent={"center"} pt={10} pb={10}>
        <Grid item xs={10}>
          <form>
            <Grid container direction={"row"} spacing={width > 1200 ? 5 : 1}>
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
                  First Name
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
                  Last Name
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
                  DSC Class
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  fullWidth
                  // id="outlined-select-currency"
                  select
                  value={dscClassItem}
                  onChange={handleChangeDsc}
                  size={"small"}
                >
                  {dscClass.map((option) => (
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
                  {`Aadhar Card`}
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
                  {`Photo`}
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

import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { baseURL } from "../../api/baseURL";
import { createOrder, getData, postData } from "../../api/calls";
import { AppContext } from "../../App";
import { handleUpload } from "../../firebase/functions";
import { localTheme } from "../theme";
import FileUploadPage from "./shared/FileUpload";

export default function DscForm(props) {
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

  const [panFile, setPanFile] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const firstName = useRef(null);
  const lastName = useRef(null);
  const mobileNo = useRef(null);
  const emailId = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [uploadFileError, setUploadFileError] = useState(false);
  const [fileSizeError, setFileSizeError] = useState(false);

  const [currency, setCurrency] = useState("Mr");
  const [dscClassItem, setDscClassItem] = useState("Class 3");
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setLoading(true);
    getData(`${baseURL}/amount`).then((res) => {
      console.log(res.data[0][props.props.type]);
      setAmount(res.data[0][props.props.type]);
      setLoading(false);
    });
  }, [props.props.type]);
  const handleSubmit = async () => {
    const value = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      mobile_no: mobileNo.current.value,
      email_id: emailId.current.value,
      paid: "0",
      aadhar_file: aadharFile,
      pan_file: panFile,
      photo_file: photoFile,
      title: currency,
      type: props.props.name,
      dsc_class: dscClass[0].value,
    };
    let err = false;
    if (value.firstName.trim() === "" || value.firstName.length <= 2) {
      setFirstNameError(true);
      err = true;
      console.log("ferror");
    } else {
      setFirstNameError(false);
    }
    if (value.lastName.trim() === "" || value.lastName.length <= 2) {
      setLastNameError(true);
      err = true;
      console.log("lerror");
    } else {
      setLastNameError(false);
    }
    if (
      value.mobile_no.trim() === "" ||
      value.mobile_no.toString().length !== 10
    ) {
      console.log("merror");
      err = true;
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email_id)) {
      setEmailError(true);
      err = true;
      console.log("eerror");
    } else {
      setEmailError(false);
    }
    if (
      value.aadhar_file == null ||
      value.pan_file == null ||
      value.photo_file == null
    ) {
      err = true;
      console.log("uerror");
      console.log(value.pan_file);
      setUploadFileError(true);
    } else {
      setUploadFileError(false);
    }

    if (err) {
      console.log("error");
      console.log(value);
    } else {
      console.log("success");
      setLoading(true);
      value.aadhar_file = await handleUpload(value.aadhar_file, "aadhaar");
      value.pan_file = await handleUpload(value.pan_file, "pan");
      value.photo_file = await handleUpload(value.photo_file, "address");
      console.log(value);
      const response = await postData(value, `${baseURL}/digiserv`);
      console.log(response.status);
      setLoading(false);
      if (response.status === 200) {
        createOrder(response.data.order_id, amount, {
          email: value.email_id,
          phone: value.mobile_no,
        });
      } else {
        alert("Please try again later");
      }
    }
  };

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
                <TextField
                  error={firstNameError}
                  fullWidth
                  variant="outlined"
                  size="small"
                  inputRef={firstName}
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
                  Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  error={lastNameError}
                  fullWidth
                  variant="outlined"
                  size="small"
                  inputRef={lastName}
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
                  Mobile No
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  error={mobileError}
                  type={"number"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  inputRef={mobileNo}
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
                  error={emailError}
                  type={"email"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  inputRef={emailId}
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
                <FileUploadPage setError={setFileSizeError} file={setPanFile} />
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
                <FileUploadPage
                  setError={setFileSizeError}
                  file={setAadharFile}
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
                  {`Photo`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FileUploadPage
                  setError={setFileSizeError}
                  file={setPhotoFile}
                />
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
                  sx={{
                    backgroundColor: localTheme.darkBg,
                    textTransform: "none",
                  }}
                  fullWidth
                  size="large"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Please Wait" : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

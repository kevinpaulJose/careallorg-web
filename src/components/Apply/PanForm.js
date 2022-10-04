import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import { localTheme } from "../theme";
import FileUploadPage from "./shared/FileUpload";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { handleUpload } from "../../firebase/functions";
import { baseURL } from "../../api/baseURL";
import { createOrder, getData, postData } from "../../api/calls";

export default function PanForm(props) {
  const { width } = useContext(AppContext);

  const [dob, setDob] = useState(new Date().toISOString());

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

  const [panFile, setPanFile] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [adFile, setAdFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const afirstName = useRef(null);
  const amiddleName = useRef(null);
  const alastName = useRef(null);
  const mobileNo = useRef(null);
  const emailId = useRef(null);
  const aadhaarNumber = useRef(null);
  const aadharNumberName = useRef(null);

  const ffirstName = useRef(null);
  const fmiddleName = useRef(null);
  const flastName = useRef(null);

  const mfirstName = useRef(null);
  const mmiddleName = useRef(null);
  const mlastName = useRef(null);

  const personalDetailsRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [middleNameError, setMiddleNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [uploadFileError, setUploadFileError] = useState(false);
  const [fileSizeError, setFileSizeError] = useState(false);

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
      a_firstName: afirstName.current.value,
      a_lastName: alastName.current.value,
      a_middleName: amiddleName.current.value,

      m_firstName: mfirstName.current.value,
      m_lastName: mlastName.current.value,
      m_middleName: mmiddleName.current.value,

      f_firstName: ffirstName.current.value,
      f_lastName: flastName.current.value,
      f_middleName: fmiddleName.current.value,

      a_mobile_no: mobileNo.current.value,
      email_id: emailId.current.value,
      aadhar_no: aadhaarNumber.current.value,
      aadhar_name: aadharNumberName.current.value,
      dob: dob,

      paid: "0",
      aadhar_file: aadharFile,
      pan_file: panFile,
      address_file: adFile,
      type: props.props.name,
      title: currency,
    };
    let err = false;
    if (value.a_firstName.trim() === "" || value.a_firstName.length <= 2) {
      setFirstNameError(true);
      err = true;
    } else {
      setFirstNameError(false);
    }
    if (value.a_lastName.trim() === "" || value.a_lastName.length <= 2) {
      setLastNameError(true);
      err = true;
    } else {
      setLastNameError(false);
    }
    if (
      value.a_mobile_no.trim() === "" ||
      value.a_mobile_no.toString().length !== 10
    ) {
      err = true;
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email_id)) {
      setEmailError(true);
      err = true;
    } else {
      setEmailError(false);
    }
    if (
      value.aadhar_file == null ||
      value.pan_file == null ||
      value.address_file == null
    ) {
      err = true;
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
      value.address_file = await handleUpload(value.address_file, "address");
      console.log(value);
      const response = await postData(value, `${baseURL}/pan`);
      console.log(response.status);
      setLoading(false);
      if (response.status === 200) {
        createOrder(response.data.order_id, amount, {
          email: value.email_id,
          phone: value.a_mobile_no,
        });
      } else {
        alert("Please try again later");
      }
    }
  };

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
            <Grid container ref={personalDetailsRef}>
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
                <TextField
                  error={firstNameError}
                  inputRef={afirstName}
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
                  Applicant's Middle Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  error={middleNameError}
                  inputRef={amiddleName}
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
                  Applicant's Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  error={lastNameError}
                  inputRef={alastName}
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
                  Mobile No
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  type={"number"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  inputRef={mobileNo}
                  error={mobileError}
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
                  inputRef={emailId}
                  error={emailError}
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
                <TextField
                  inputRef={aadhaarNumber}
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
                  Name as per Aadhaar letter / card
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={aadharNumberName}
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
                <TextField
                  inputRef={ffirstName}
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
                  Father's Middle Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={fmiddleName}
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
                  Father's Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={flastName}
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
                  Mother's First Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  inputRef={mfirstName}
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
                  inputRef={mmiddleName}
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
                  inputRef={mlastName}
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
                <FileUploadPage file={setPanFile} setError={setFileSizeError} />
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
                  {`Address Proof`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FileUploadPage setError={setFileSizeError} file={setAdFile} />
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

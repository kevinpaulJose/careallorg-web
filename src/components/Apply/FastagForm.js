import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { baseURL } from "../../api/baseURL";
import { createOrder, getData, postData } from "../../api/calls";
import { sendEmail } from "../../api/email";
import { AppContext } from "../../App";
import { handleUpload } from "../../firebase/functions";
import { localTheme } from "../theme";
import FileUploadPage from "./shared/FileUpload";

export default function FastagForm(props) {
  const { width } = useContext(AppContext);

  const titles = [
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

  const classes = [
    {
      value: "Class 4",
      label: "Class 4",
    },
    {
      value: "Class 5",
      label: "Class 5",
    },
    {
      value: "Class 6",
      label: "Class 6",
    },
    {
      value: "Class 7",
      label: "Class 7",
    },
    {
      value: "Class 12",
      label: "Class 12",
    },
  ];

  const [title, settitle] = useState("Mr");
  const [classesItem, setClassesItem] = useState("Class 4");
  const handleChange = (event) => {
    settitle(event.target.value);
  };

  const [panFile, setPanFile] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [rcFile, setRcFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const firstName = useRef(null);
  const lastName = useRef(null);
  const mobileNo = useRef(null);
  const emailId = useRef(null);
  const vehicle_no = useRef(null);
  const chassis_no = useRef(null);
  const engine_no = useRef(null);
  const rto_location = useRef(null);
  const personalDetailsRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [vehicleNumberError, setVehicleNumberError] = useState(false);
  const [chassisNumberError, setChassisNumberError] = useState(false);
  const [engineNumberError, setEngineNumberError] = useState(false);
  const [rcLocationError, setRcLocationError] = useState(false);
  const [uploadFileError, setUploadFileError] = useState(false);
  const [fileSizeError, setFileSizeError] = useState(false);

  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setLoading(true);
    getData(`${baseURL}/amount`)
      .then((res) => {
        const type = props.type.split("_");
        console.log(
          res.data[0][type[0]][type[1]][
            classesItem.split(" ").join("").toLowerCase()
          ]
        );
        setAmount(
          res.data[0][type[0]][type[1]][
            classesItem.split(" ").join("").toLowerCase()
          ]
        );
        setLoading(false);
      })
      .catch((err) => {
        alert("Error occoured");
        setLoading(false);
      });
  }, [props.type, classesItem]);
  const handleSubmit = async () => {
    const value = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      mobile_no: mobileNo.current.value,
      email_id: emailId.current.value,
      vehicle_no: vehicle_no.current.value,
      chassis_no: chassis_no.current.value,
      engine_no: engine_no.current.value,
      title: title,
      vehicle_class: classesItem,
      paid: "0",
      aadhar_file: aadharFile,
      pan_file: panFile,
      reg_cert_file: rcFile,
      rto_location: rto_location.current.value,
      type: props.name,
    };
    let err = false;
    if (value.firstName.trim() === "" || value.firstName.length <= 2) {
      setFirstNameError(true);
      err = true;
    } else {
      setFirstNameError(false);
    }
    if (value.lastName.trim() === "" || value.lastName.length <= 2) {
      setLastNameError(true);
      err = true;
    } else {
      setLastNameError(false);
    }
    if (
      value.mobile_no.trim() === "" ||
      value.mobile_no.toString().length !== 10
    ) {
      err = true;
      setMobileError(true);
    } else {
      setMobileError(false);
    }
    if (value.vehicle_no.trim() === "" || value.vehicle_no.length <= 2) {
      setVehicleNumberError(true);
      err = true;
    } else {
      setVehicleNumberError(false);
    }
    if (value.chassis_no.trim() === "" || value.chassis_no.length <= 2) {
      setChassisNumberError(true);
      err = true;
    } else {
      setChassisNumberError(false);
    }
    if (value.engine_no.trim() === "" || value.engine_no.length <= 2) {
      setEngineNumberError(true);
      err = true;
    } else {
      setEngineNumberError(false);
    }
    if (value.vehicle_no.trim() === "" || value.vehicle_no.length <= 2) {
      setVehicleNumberError(true);
      err = true;
    } else {
      setVehicleNumberError(false);
    }
    if (value.rto_location.trim() === "" || value.rto_location.length <= 2) {
      setRcLocationError(true);
      err = true;
    } else {
      setRcLocationError(false);
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
      value.reg_cert_file == null
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
      value.reg_cert_file = await handleUpload(value.reg_cert_file, "rc");
      console.log(value);
      const response = await postData(value, `${baseURL}/fastag`);
      // alert(response.data.order_id);

      if (response.status === 200) {
        let order_details = await createOrder(response.data.order_id, amount, {
          email: value.email_id,
          phone: value.mobile_no,
        });
        if (order_details.status === 200) {
          console.log(order_details.data);
          await sendEmail({
            order_id: response.data.order_id,
            product: value.type,
            to_email: value.email_id,
            type: "customer",
            to_name: value.firstName,
            payment_link: order_details.data.payment_link,
          });
          await sendEmail({
            order_id: response.data.order_id,
            product: value.type,
            to_email: value.email_id,
            type: "store",
            to_name: value.firstName,
            payment_link: order_details.data.payment_link,
          });
          window.location.href = order_details.data.payment_link;
          setLoading(false);
        } else {
          alert("Please try again later");
          console.log(order_details.data);
          setLoading(false);
        }
      } else {
        alert("Please try again later");
        setLoading(false);
      }
    }
  };

  const handleChangeClass = (event) => {
    setClassesItem(event.target.value);
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
                  ref={personalDetailsRef}
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
                  // id="outlined-select-title"

                  select
                  value={title}
                  onChange={handleChange}
                  size={"small"}
                >
                  {titles.map((option) => (
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
                  inputRef={firstName}
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
                  Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={lastName}
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={lastNameError}
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
                  inputRef={mobileNo}
                  type={"number"}
                  fullWidth
                  variant="outlined"
                  size="small"
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
                  Email ID
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={emailId}
                  type={"email"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={emailError}
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
                  Vehicle Details
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
                  Vehicle Class
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  fullWidth
                  // id="outlined-select-title"
                  select
                  value={classesItem}
                  onChange={handleChangeClass}
                  size={"small"}
                >
                  {classes.map((option) => (
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
                  Vehicle Number
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={vehicle_no}
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={vehicleNumberError}
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
                  Chassis Number
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={chassis_no}
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={chassisNumberError}
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
                  Engine Number
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={engine_no}
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={engineNumberError}
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
                  {`Registration Location (RTO)`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  inputRef={rto_location}
                  type={"email"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={rcLocationError}
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
                  {`Registration Certificate (RC)`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FileUploadPage setError={setFileSizeError} file={setRcFile} />
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

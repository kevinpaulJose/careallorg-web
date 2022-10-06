import {
  Button,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { baseURL } from "../../../../api/baseURL";
import { getData, postData } from "../../../../api/calls";

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [currentData, setCurrentData] = useState({
    fastag: 0,
    pan: 0,
    digiserv: 0,
    id: "1",
    _id: "234",
  });
  const fastagRef = useRef(null);
  const panRef = useRef(null);
  const digiRef = useRef(null);

  const updateValues = async () => {
    setUpdating(true);
    const value = {
      fastag: parseFloat(currentData.fastag),
      pan: parseFloat(currentData.pan),
      digiserv: parseFloat(currentData.digiserv),
    };
    postData(value, `${baseURL}/amount`)
      .then((response) => {
        if (response.status === 204) {
          fastagRef.current.value = "";
          panRef.current.value = "";
          digiRef.current.value = "";
          setUpdating(false);
        } else {
          alert("Error Occured");
        }
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });

    console.log(value);
  };

  const handleChange = (event, value) => {
    setCurrentData({ ...currentData, [value]: event.target.value });
  };

  useEffect(() => {
    setLoading(true);
    getData(`${baseURL}/amount`)
      .then((response) => {
        setCurrentData(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Stack>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel htmlFor="outlined-adornment-amount">FASTag</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              label="FASTag"
              inputRef={fastagRef}
              type="number"
              placeholder={currentData.fastag}
              onChange={(e) => handleChange(e, "fastag")}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel htmlFor="outlined-adornment-amount">PAN</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              label="PAN"
              inputRef={panRef}
              type="number"
              placeholder={currentData.pan}
              onChange={(e) => handleChange(e, "pan")}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel htmlFor="outlined-adornment-amount">DSC</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              label="DSC"
              inputRef={digiRef}
              type="number"
              placeholder={currentData.digiserv}
              onChange={(e) => handleChange(e, "digiserv")}
            />
          </FormControl>
          <Button
            sx={{
              textTransform: "none",
              width: 200,
              marginLeft: "10px",
              mt: 3,
            }}
            variant="contained"
            onClick={updateValues}
            disabled={updating}
          >
            {updating ? <CircularProgress /> : "Update"}
          </Button>
        </Stack>
      )}
    </>
  );
}

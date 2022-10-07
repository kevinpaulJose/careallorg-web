import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { baseURL } from "../../../../api/baseURL";
import { getData, postData } from "../../../../api/calls";
import TextInputs from "./shared/TextInputs";

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [currentData, setCurrentData] = useState({
    fastag: {
      sbi: {
        class4: 0,
        class5: 0,
        class6: 0,
        class7: 0,
        class12: 0,
      },
      icici: {
        class4: 0,
        class5: 0,
        class6: 0,
        class7: 0,
        class12: 0,
      },
    },
    pan: 0,
    digiserv: {
      individual: 0,
      both: 0,
    },
  });

  const fastagRef_sbi_class4 = useRef(null);
  const fastagRef_sbi_class5 = useRef(null);
  const fastagRef_sbi_class6 = useRef(null);
  const fastagRef_sbi_class7 = useRef(null);
  const fastagRef_sbi_class12 = useRef(null);
  const fastagRef_icici_class4 = useRef(null);
  const fastagRef_icici_class5 = useRef(null);
  const fastagRef_icici_class6 = useRef(null);
  const fastagRef_icici_class7 = useRef(null);
  const fastagRef_icici_class12 = useRef(null);

  const panRef = useRef(null);
  const digiRef_individual = useRef(null);
  const digiRef_both = useRef(null);

  const types = {
    fastag: [
      { name: "FASTag_SBI_Class 4", ref: fastagRef_sbi_class4 },
      { name: "FASTag_SBI_Class 5", ref: fastagRef_sbi_class5 },
      { name: "FASTag_SBI_Class 6", ref: fastagRef_sbi_class6 },
      { name: "FASTag_SBI_Class 7", ref: fastagRef_sbi_class7 },
      { name: "FASTag_SBI_Class 12", ref: fastagRef_sbi_class12 },
      { name: "FASTag_ICICI_Class 4", ref: fastagRef_icici_class4 },
      { name: "FASTag_ICICI_Class 5", ref: fastagRef_icici_class5 },
      { name: "FASTag_ICICI_Class 6", ref: fastagRef_icici_class6 },
      { name: "FASTag_ICICI_Class 7", ref: fastagRef_icici_class7 },
      { name: "FASTag_ICICI_Class 12", ref: fastagRef_icici_class12 },
    ],
    pan: [{ name: "PAN", ref: panRef }],
    digiserv: [
      { name: "DigiServ_Individual", ref: digiRef_individual },
      { name: "DigiServ_Both", ref: digiRef_both },
    ],
  };

  const updateValues = async () => {
    setUpdating(true);
    const value = {
      fastag: currentData.fastag,
      pan: currentData.pan,
      digiserv: currentData.digiserv,
    };
    console.log(value);
    postData(value, `${baseURL}/amount`)
      .then((response) => {
        if (response.status === 204) {
          types.fastag.forEach((v) => (v.ref.current.value = ""));
          types.digiserv.forEach((v) => (v.ref.current.value = ""));
          panRef.current.value = "";

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
    const key = value.split("_");
    if (key[0] === "fastag") {
      let temp = currentData;
      temp[key[0]][key[1]][key[2]] = parseFloat(event.target.value);
      console.log(temp);
      setCurrentData(temp);
    } else if (key[0] === "pan") {
      setCurrentData({ ...currentData, pan: parseFloat(event.target.value) });
    } else {
      let temp = currentData;
      temp[key[0]][key[1]] = parseFloat(event.target.value);
      console.log(temp);
      setCurrentData(temp);
    }
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
          <Typography fontWeight={"bold"} fontSize={18} variant="body2">
            FASTag
          </Typography>
          <Grid container mt={2}>
            {types.fastag.map((v, _) => {
              const placeholderArr = v.name.split("_");
              const placeholderValue =
                currentData[placeholderArr[0].toLocaleLowerCase()][
                  placeholderArr[1].toLocaleLowerCase()
                ][placeholderArr[2].split(" ").join("").toLocaleLowerCase()];
              const type = `${placeholderArr[0].toLocaleLowerCase()}_${placeholderArr[1].toLocaleLowerCase()}_${placeholderArr[2]
                .split(" ")
                .join("")
                .toLocaleLowerCase()}`;
              return (
                <Grid item key={type}>
                  <TextInputs
                    label={`${v.name.split("_")[1]} ${v.name.split("_")[2]}`}
                    reference={v.ref}
                    placeholder={placeholderValue}
                    type={type}
                    handleChange={handleChange}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Typography fontWeight={"bold"} fontSize={18} variant="body2">
            DSC
          </Typography>
          <Grid container mt={2}>
            {types.digiserv.map((v, _) => {
              const placeholderArr = v.name.split("_");
              const placeholderValue =
                currentData[placeholderArr[0].toLocaleLowerCase()][
                  placeholderArr[1].toLocaleLowerCase()
                ];
              const type = `${placeholderArr[0].toLocaleLowerCase()}_${placeholderArr[1].toLocaleLowerCase()}`;
              return (
                <Grid item key={type}>
                  <TextInputs
                    label={`${v.name.split("_")[1]}`}
                    reference={v.ref}
                    placeholder={placeholderValue}
                    type={type}
                    handleChange={handleChange}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Typography fontWeight={"bold"} fontSize={18} variant="body2">
            PAN
          </Typography>
          <Grid container mt={2}>
            {types.pan.map((v, _) => {
              const placeholderValue = currentData["pan"];
              const type = `pan`;
              return (
                <Grid item key={type}>
                  <TextInputs
                    label={`${"pan"}`}
                    reference={v.ref}
                    placeholder={placeholderValue}
                    type={type}
                    handleChange={handleChange}
                  />
                </Grid>
              );
            })}
          </Grid>

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

import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function TextInputs(props) {
  return (
    <>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.label}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">₹</InputAdornment>}
          label={props.label}
          inputRef={props.reference}
          type="number"
          placeholder={props.placeholder.toString()}
          onChange={(e) => props.handleChange(e, props.type)}
        />
      </FormControl>
    </>
  );
}

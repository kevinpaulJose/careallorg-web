import { Button, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useRef } from "react";
import { localTheme } from "../../theme";
import { AdminContext } from "./Admin";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setIsSignedIn } = useContext(AdminContext);

  const handleLogin = () => {
    const emailId = emailRef.current.value;
    const password = passwordRef.current.value;

    if (emailId === "careall2020@gmail.com" && password === "password") {
      setIsSignedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <Paper elevation={2} sx={{ padding: 10 }}>
        <Stack>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            color={localTheme.darkBg}
            fontSize={20}
          >
            Careall Admin Login
          </Typography>
          <TextField
            label="Email ID"
            variant="outlined"
            sx={{ marginTop: 4, width: 400 }}
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            variant="outlined"
            sx={{ marginTop: 2 }}
            type="password"
            inputRef={passwordRef}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ textTransform: "none", marginTop: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

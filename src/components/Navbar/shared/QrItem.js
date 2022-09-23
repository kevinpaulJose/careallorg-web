import { Stack } from "@mui/material";

export default function QrItem() {
  return (
    <>
      <Stack direction={"row"} justifyContent={"center"}>
        <img
          alt="qr"
          src={require("../../../assets/bank/qr.jpeg")}
          width={200}
          height={200}
        />
      </Stack>
    </>
  );
}

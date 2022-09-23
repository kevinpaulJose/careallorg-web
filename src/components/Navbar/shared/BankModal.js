import { Box, Grid, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { localTheme } from "../../theme";
import BankDetails from "./BankDetails";
import QrItem from "./QrItem";
import CancelIcon from "@mui/icons-material/Cancel";
export default function BankModal(props) {
  const [selected, setSelected] = useState("bank");

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <>
      <Modal open={props.show} onClose={props.handleBank}>
        <Box sx={{ ...style, borderRadius: 2 }}>
          <Stack direction={"row"} justifyContent={"flex-start"} pb={1}>
            <Typography variant="h5">Bank Details</Typography>
            <CancelIcon
              sx={{ position: "absolute", top: "10px", right: "20px" }}
              className={"pointer"}
              onClick={props.handleBank}
            />
          </Stack>
          <div
            style={{
              height: "0.1px",
              backgroundColor: "lightgrey",
            }}
          />
          <Grid container direction={"row"} mt={1}>
            <Grid item sm={12} md={2} lg={4}>
              <Stack direction={"column"} spacing={2}>
                <Typography
                  color={localTheme.linkColor}
                  sx={{ padding: 1, borderRadius: 1 }}
                  className="pointer"
                  onClick={() => handleSelect("bank")}
                >
                  ICICI BANK
                </Typography>
                <Typography
                  color={localTheme.linkColor}
                  sx={{ padding: 1, borderRadius: 1 }}
                  className="pointer"
                  onClick={() => handleSelect("code")}
                >
                  BHIM UPI - QR CODE
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm={12} md={10} lg={8}>
              {selected === "bank" ? <BankDetails /> : <QrItem />}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

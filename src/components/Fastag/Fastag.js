import { Stack } from "@mui/material";
import { localTheme } from "../theme";
import Benefits from "./Benefits/Benefits";
import TopComponent from "./Top/TopComponent";

export default function Fastag() {
  return (
    <>
      <Stack style={{ backgroundColor: localTheme.mainBg }} spacing={10}>
        <TopComponent />
        {/* <AboutProduct
          title={"FASTag"}
          desc={`FASTag allows you to drive through the FASTag lanes 
        without having to stop to pay the toll taxes. To ensure less traffic on the toll lanes, 
        the Government of India has made it mandatory for the vehicle owners to have FASTag on their vehicles.`}
          img={require("../../assets/fastag/fastag_icon.png")}
        /> */}
        <Benefits />
      </Stack>
    </>
  );
}

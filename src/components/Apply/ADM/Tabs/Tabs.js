import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FastagData from "./FastagData";
import Selection from "./shared/Selection";
import { useState } from "react";
import PanData from "./PanData";
import DscData from "./DscData";

export default function Tabs() {
  const [value, setValue] = React.useState("1");
  const [selected, setSelected] = useState("Order Placed");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="FASTag" value="1" />
            <Tab label="PAN" value="2" />
            <Tab label="DSC" value="3" />
            <Tab label="Settings" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Selection selected={selected} setSelected={setSelected} />
          <FastagData selected={selected} />
        </TabPanel>
        <TabPanel value="2">
          <Selection selected={selected} setSelected={setSelected} />
          <PanData selected={selected} />
        </TabPanel>
        <TabPanel value="3">
          <Selection selected={selected} setSelected={setSelected} />
          <DscData selected={selected} />
        </TabPanel>
        <TabPanel value="4">Settings</TabPanel>
      </TabContext>
    </Box>
  );
}

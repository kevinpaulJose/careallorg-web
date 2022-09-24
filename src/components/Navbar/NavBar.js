import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import LengthyItem from "./LenthyItem/LengthyItem";
import BankModal from "./shared/BankModal";
import SmallItem from "./SmallItem/SmallItem";
export default function NavBar(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(false);
  const [bank, setBank] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const resize = () => {
    setWidth(window.innerWidth);
  };

  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  const handleBank = () => {
    setBank(!bank);
  };

  const [selected, setSelected] = useState("fastag");

  const handleSelect = (selected) => {
    setSelected(selected);
  };

  return (
    <>
      {width > 900 ? (
        <Box sx={{ flexGrow: 1, color: "white" }}>
          <LengthyItem
            handleBank={handleBank}
            selected={selected}
            handleSelect={handleSelect}
            panReference={props.panReference}
            reference={props.reference}
          />
        </Box>
      ) : (
        <>
          <SmallItem
            toggleMenu={toggleMenu}
            expanded={expanded}
            handleBank={handleBank}
            selected={selected}
            handleSelect={handleSelect}
            panReference={props.panReference}
            reference={props.reference}
          />
        </>

        // </Box>
      )}
      <BankModal show={bank} handleBank={handleBank} />
    </>
  );
}

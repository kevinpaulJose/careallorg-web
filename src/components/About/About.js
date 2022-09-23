import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import MainComponent from "./Items/MainComponent";
import Promotion from "./Items/Promotion";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const resize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      <Stack direction={"column"} alignContent={"center"}>
        <img
          alt="contact"
          height={width > 900 && 400}
          style={{ objectFit: width >= 900 ? "cover" : "fill" }}
          src={require("../../assets/about/about.png")}
        />
        <MainComponent width={width} />
        <Promotion width={width} />
      </Stack>
    </>
  );
}

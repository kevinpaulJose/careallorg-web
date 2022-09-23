import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import FormItem from "./Items/FormItem";
import MiddleItem from "./Items/MiddleItem";

export default function Contact() {
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
          src={require("../../assets/contact/contact.jpg")}
        />
        <MiddleItem />
        <FormItem />
      </Stack>
    </>
  );
}

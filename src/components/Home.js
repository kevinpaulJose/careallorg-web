import { Stack } from "@mui/material";
import { useRef } from "react";
import { localTheme } from "./theme";
import Benefits from "./Fastag/Benefits/Benefits";
import FastagProducts from "./Fastag/FastagProducts/FastagProducts";
import TopComponent from "./Fastag/Top/TopComponent";
import ProductCategory from "./ProductCategory/ProductCategory";

export default function Fastag() {
  const fastagProductRef = useRef(null);
  return (
    <>
      <Stack style={{ backgroundColor: localTheme.mainBg }} spacing={10}>
        <TopComponent reference={fastagProductRef} />
        <Benefits />
        <ProductCategory />
        <div ref={fastagProductRef}>
          <FastagProducts />
        </div>
      </Stack>
    </>
  );
}

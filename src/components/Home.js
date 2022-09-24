import { Stack } from "@mui/material";
import { useRef } from "react";
import { localTheme } from "./theme";
import Benefits from "./Fastag/Benefits/Benefits";
import FastagProducts from "./Fastag/FastagProducts/FastagProducts";
import TopComponent from "./Fastag/Top/TopComponent";
import ProductCategory from "./ProductCategory/ProductCategory";
import Pan from "./Pan/Pan";
import NavBar from "./Navbar/NavBar";
import DscProducts from "./Dsc/DscProducts";

export default function Fastag() {
  const fastagProductRef = useRef(null);
  const productCategoryRef = useRef(null);
  const panReference = useRef(null);
  const dscReference = useRef(null);
  return (
    <>
      <Stack style={{ backgroundColor: localTheme.mainBg }} spacing={10}>
        <NavBar
          reference={fastagProductRef}
          panReference={panReference}
          dscReference={dscReference}
        />
        <TopComponent
          reference={fastagProductRef}
          serviceReference={productCategoryRef}
        />
        <Benefits />
        <div ref={productCategoryRef}>
          <ProductCategory />
        </div>

        <div ref={fastagProductRef}>
          <FastagProducts />
        </div>
        <div ref={panReference}>
          <Pan />
        </div>
        <div ref={dscReference}>
          <DscProducts />
        </div>
      </Stack>
    </>
  );
}

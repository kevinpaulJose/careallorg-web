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
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Fastag() {
  const fastagProductRef = useRef(null);
  const productCategoryRef = useRef(null);
  const panReference = useRef(null);
  const dscReference = useRef(null);
  const contactReference = useRef(null);
  return (
    <>
      <NavBar
        reference={fastagProductRef}
        panReference={panReference}
        dscReference={dscReference}
        contactReference={contactReference}
      />
      <Stack style={{ backgroundColor: localTheme.mainBg }} spacing={10}>
        <TopComponent
          reference={fastagProductRef}
          serviceReference={productCategoryRef}
        />
        <Benefits />
        <div ref={productCategoryRef}>
          <ProductCategory
            reference={fastagProductRef}
            panReference={panReference}
            dscReference={dscReference}
          />
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
        <div ref={contactReference}>
          <Contact />
        </div>
        <Footer />
      </Stack>
    </>
  );
}

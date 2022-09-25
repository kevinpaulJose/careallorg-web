import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProductCard from "../Shared/ProductCard";

export default function NewProduct() {
  const { width } = useContext(AppContext);
  return (
    <>
      <Grid container direction={"row"} spacing={0}>
        <Grid item xs={10} md={5}>
          <ProductCard
            img={require("../../assets/dsc_icon.png")}
            contents={["CLASS 3 DIGITAL", "Signature -", "Individual"]}
            desc={
              "Buy Digital Signature Certificate & Sign Documents Used for GST, MCA, Income Tax, Tender submissions, EPFO filings, and more. Class 3 Digital Signature - INDIVIDUAL will be delivered win 10 days"
            }
            link={"dsc_individual"}
            customHeight={500}
          />
        </Grid>
        <Grid item xs={10} md={5} ml={width > 950 && 3} mt={width < 950 && 3}>
          <ProductCard
            img={require("../../assets/dsc_icon.png")}
            contents={["CLASS 3 DIGITAL", "Signature -", "Individual (BOTH)"]}
            desc={
              "Buy Digital Signature Certificate & Sign Documents Used for GST, MCA, Income Tax, Tender submissions, EPFO filings, and more. Class 3 Digital Signature - INDIVIDUAL will be delivered win 10 days"
            }
            link={"dsc_individual_both"}
            customHeight={500}
          />
        </Grid>
      </Grid>
    </>
  );
}

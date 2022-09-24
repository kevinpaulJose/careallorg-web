import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../App";
import ProductCard from "../../Shared/ProductCard";

export default function ReplacementProduct() {
  const { width } = useContext(AppContext);
  return (
    <>
      <Grid container direction={"row"} spacing={0}>
        <Grid item xs={10} md={5}>
          <ProductCard
            img={require("../../../assets/fastag/fastag_icon.png")}
            contents={["SBI FASTag", "Replacement"]}
            desc={
              "You can change your name or any other details in existing SBI FASTag."
            }
            link={"sbi_fastag_replacement"}
          />
        </Grid>
        <Grid item xs={10} md={5} ml={width > 950 && 3} mt={width < 950 && 3}>
          <ProductCard
            img={require("../../../assets/fastag/fastag_icon.png")}
            contents={["ICICI FASTag", "Replacement"]}
            desc={
              "You can change your name or any other details in existing FASTag."
            }
            link={"icici_fastag_replacement"}
          />
        </Grid>
      </Grid>
    </>
  );
}

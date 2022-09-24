import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../App";
import ProductCard from "../../Shared/ProductCard";

export default function NewProduct() {
  const { width } = useContext(AppContext);
  return (
    <>
      <Grid container direction={"row"} spacing={0}>
        <Grid item xs={10} md={5}>
          <ProductCard
            img={require("../../../assets/fastag/fastag_icon.png")}
            contents={["SBI FASTag"]}
            desc={
              "You can apply SBI FASTag for Personal Vehicles and for Commercial Vehicles."
            }
            link={"sbi_fastag"}
          />
        </Grid>
        <Grid item xs={10} md={5} ml={width > 950 && 3} mt={width < 950 && 3}>
          <ProductCard
            img={require("../../../assets/fastag/fastag_icon.png")}
            contents={["ICICI FASTag"]}
            desc={
              "You can apply ICICI FASTag for Personal Vehicles and for Commercial Vehicles."
            }
            link={"icici_fastag"}
          />
        </Grid>
      </Grid>
    </>
  );
}

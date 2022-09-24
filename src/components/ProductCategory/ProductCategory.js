import { Grid, Typography } from "@mui/material";
import ProductCategoryCard from "./shared/ProductCategoryCard";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import LocalCarWashRoundedIcon from "@mui/icons-material/LocalCarWashRounded";
import { localTheme } from "../theme";

export default function ProductCategory() {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Typography
            mb={2}
            variant={"h5"}
            fontWeight={"bold"}
            color={localTheme.darkBg}
          >
            Our Services
          </Typography>
          <Grid container direction={"row"}>
            <Grid item xs={12} lg={4}>
              <ProductCategoryCard icon={<PanIcon />} title={"PAN Card"} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProductCategoryCard
                icon={<DigiSig />}
                title={"Digital Signature"}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProductCategoryCard icon={<FasTag />} title={"FASTag"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const PanIcon = () => {
  return (
    <>
      <ContactEmergencyRoundedIcon
        color="primary"
        sx={{ width: 50, height: 50 }}
      />
    </>
  );
};

const DigiSig = () => {
  return (
    <>
      <HistoryEduRoundedIcon color="primary" sx={{ width: 50, height: 50 }} />
    </>
  );
};

const FasTag = () => {
  return (
    <>
      <LocalCarWashRoundedIcon color="primary" sx={{ width: 50, height: 50 }} />
    </>
  );
};

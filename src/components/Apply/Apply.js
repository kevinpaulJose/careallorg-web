import { Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { application_type } from "../Shared/shardVars";
import { localTheme } from "../theme";
import DscForm from "./DscForm";
import FastagForm from "./FastagForm";
import PanForm from "./PanForm";

export default function Apply(props) {
  const params = useParams();

  return (
    <>
      <Grid container justifyContent={"center"} pb={5}>
        <Grid item xs={12}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              textAlign={"center"}
              variant={"h4"}
              fontWeight={"bold"}
              color={localTheme.darkBg}
              mt={3}
            >
              Care All Digital Services
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            textAlign={"center"}
            variant={"h6"}
            // fontWeight={"bold"}
            color={localTheme.darkBg}
          >
            {`${application_type[params.type].name} - Purchase`}
          </Typography>
        </Grid>
        <Grid
          item
          xs={11}
          lg={7}
          sx={{ backgroundColor: localTheme.mainBg, borderRadius: 5 }}
          mt={5}
        >
          <FormItem type={application_type[params.type].type} name />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

const FormItem = (props) => {
  switch (props.type) {
    case "digiserv":
      return <DscForm props={props} />;
    case "fastag":
      return <FastagForm props={props} />;
    case "pan":
      return <PanForm props={props} />;
    default:
      return <></>;
  }
};

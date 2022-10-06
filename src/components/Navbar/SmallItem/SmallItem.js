import MenuIcon from "@mui/icons-material/Menu";
import { localTheme } from "../../theme";
import { Typography, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { items } from "../../Shared/shardVars";
export default function SmallItem(props) {
  return (
    <>
      <MenuIcon
        onClick={props.toggleMenu}
        sx={{ width: 30, height: 30 }}
        style={{ position: "absolute", right: 10, top: 10 }}
      />
      <Grid
        container
        direction={"column"}
        alignContent={"center"}
        textAlign={"center"}
        spacing={3}
        pt={2}
        display={props.expanded ? "block" : "none"}
        pb={2}
        style={{ backgroundColor: localTheme.mainBg }}
      >
        {items.map((v, _) => (
          <Grid
            item
            className="pointer"
            onClick={() => {
              props.toggleMenu();
              props.handleSelect({ selected: v.value });
              if (v.value === "pancard") {
                props.panReference.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
              if (v.value === "fastag") {
                props.reference.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
              if (v.value === "contact") {
                props.contactReference.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
              if (v.value === "dsc") {
                props.dscReference.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
              if (v.value === "track") {
                props.trackReference.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
              to={v.value}
            >
              <Typography
                variant="body1"
                fontSize={20}
                color={props.selected === v.value && localTheme.activeColor}
                sx={{
                  textDecoration: props.selected === v.value && "underline",
                }}
              >
                {v.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

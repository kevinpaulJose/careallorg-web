import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../../Shared/shardVars";
import { localTheme } from "../../theme";

export default function LengthyItem(props) {
  return (
    <>
      <Grid
        container
        style={{ justifyContent: "center", backgroundColor: localTheme.mainBg }}
        spacing={10}
        padding={3}
        direction={"row"}
      >
        {items.map((v, _) => (
          <Grid item onClick={() => props.handleSelect(v.value)}>
            <Link
              to={`/${v.value}`}
              style={{
                textDecorationLine: "none",
              }}
            >
              <Typography
                className={"pointer"}
                color={
                  props.selected === v.value
                    ? "black"
                    : localTheme.darkSecondary
                }
                style={{
                  fontWeight: props.selected === v.value ? "bold" : "normal",
                  fontSize: 18,
                }}
              >
                {v.name}
              </Typography>
              <Stack
                direction={"row"}
                style={{ justifyContent: "center" }}
                mt={0.5}
              >
                {props.selected === v.value && (
                  <div
                    style={{
                      backgroundColor: localTheme.activeColor,
                      height: 2,
                      width: "50%",
                    }}
                  />
                )}
              </Stack>
            </Link>
          </Grid>
        ))}
        <Grid item>
          <Button
            style={{
              borderColor: localTheme.activeColor,
              color: localTheme.activeColor,
              width: "140%",
              textTransform: "none",
              fontWeight: "normal",
              backgroundColor: "white",
              fontSize: 16,
            }}
            variant="outlined"
            onClick={props.handleBank}
          >
            Bank Details
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

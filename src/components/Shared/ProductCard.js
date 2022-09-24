import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { localTheme } from "../theme";
import { Stack, Typography } from "@mui/material";

export default function ProductCard(props) {
  return (
    <Card
      sx={{
        height: props.customHeight ? props.customHeight : 350,
      }}
    >
      <CardContent>
        <Stack direction={"row"} justifyContent={"center"}>
          {props.img && <img src={props.img} width={70} alt={"product"} />}
        </Stack>
        <div style={{ marginTop: 10 }}>
          {props.contents.map((v, _) => (
            <Typography
              textAlign={"center"}
              mt={0}
              variant={"h6"}
              fontWeight={"bold"}
              color={localTheme.darkBg}
              key={v}
            >
              {v}
            </Typography>
          ))}
        </div>

        <Stack direction={"row"} justifyContent={"center"}>
          <Typography
            variant="subtitle2"
            fontSize={16}
            textAlign={"center"}
            width="90%"
            mt={2}
          >
            {props.desc}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {/* <Stack justifyContent={"center"} direction="row"></Stack> */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: localTheme.activeColor,
            textTransform: "none",
            width: "60%",
          }}
          size="medium"
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
}

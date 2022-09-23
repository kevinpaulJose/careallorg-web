import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { localTheme } from "../../theme";

export default function MainComponent(props) {
  return (
    <>
      <Grid container direction={"row"} padding={10} spacing={10}>
        <Grid item sm={12} md={6}>
          <Stack direction={"column"}>
            <Typography variant="h4">About Us</Typography>
            <div
              style={{
                height: "3px",
                backgroundColor: localTheme.activeColor,
                width: 50,
              }}
            />
            <Typography mt={3} variant="body1" color={"text.secondary"}>{`
                CAREALL DIGITAL SERVICES is one of the fastest growing company in South India to adopting new technologies and implementing it in real life solutions. 
                CAREALL DIGITTAL SERVICES are authorized sales and service provider for “FASTag” product in south India. We have dealers for distribute the products in 
                Karnataka, Kerala, Tamil Nadu, Telangana, Andhra Pradesh, Pondicherry, Gujarat, Maharashtra, Uttar Pradesh, Jharkhand, Himachal Pradesh, Haryana, Punjab. 
                Fastag is an Electronic Toll Collection System” (ETC) enables users to travel across national high ways through Toll Gates without stopping vehicles by utilizing RFID Tag.
                 Main objective of the FastTag is to provide a robust lane integrated with sub systems, which facilitates a fraud-free transaction management to ensure steady, accurate and traceable financial 
                flow and main goal of SBI FastTag is to save time consumption for unnecessary traffic delay for Travellers who waiting in long queue to pay toll fee at every Toll Plaza.
                `}</Typography>
            <Typography mt={3} variant="body1" color={"text.secondary"}>
              {`Welcome to www.careall.in We have introduced www.careall.in with the aim of serving our clients with 
                    best and reliable online service assistance in India. We apply strategic thinking, dedicated support, complete efforts and practical approach.`}
            </Typography>
            <Typography mt={3} variant="body1" color={"text.secondary"}>
              {`
                    It is hereby informed to the user that we are only a Consultancy Firm providing consultancy services with the intention to help people process their online filings; 
                    the users shall provide their personal data in acceptance of the said fact and their relationship with the website shall be governed by the terms & conditions, privacy policy, 
                    refund policy and disclaimer displayed on the website. Note: www.careall.in is owned and operated by a consultancy firm and in no way represent any relation to any government body or Office.
                    `}
            </Typography>
            <Stack direction={"row"} spacing={2} mt={2}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button color={"warning"} variant="contained">
                  View Services
                </Button>
              </Link>

              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <Button color={"warning"} variant="contained">
                  Contact Us
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={6}>
          {props.width > 900 && (
            <img
              alt="about"
              src={require("../../../assets/about/about_inner.jpg")}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

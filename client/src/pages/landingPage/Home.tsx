import { Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { FACEBOOK_LOGO, INSTLOGO, LOGO } from "../../utils/constants";
import { H1, P } from "../../components/Typography";

function Home() {
  return (
    <section id="home">
      <Grid xs={12} container>
        <Grid
          item
          md={6}
          sx={{
            mt: "200px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <H1 sx={{ fontSize: "93px", pr: "50px" }}>EduTech</H1>
          <P sx={{ fontSize: "20px" }}>
            Building the Future of User Interfaces with Ours
          </P>

          <div className="logo_container">
            <Link to={"https://www.facebook.com/"} target="_blank">
              <img src={FACEBOOK_LOGO} alt="facebook-logo" className="logo" />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <img alt="insta-logo" src={INSTLOGO} className="logo" />
            </Link>
          </div>
        </Grid>
        <Grid item md={6} sx={{ mt: 3 }}>
          <img
            src={LOGO}
            width="500px"
            height="500px"
            style={{ objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default Home;

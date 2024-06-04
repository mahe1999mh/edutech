import { Grid } from "@mui/material";

import { Link } from "react-router-dom";
// import facebook from "../../assets/logo_facebook.png";
// import instagram from "../../assets/logo_insta.png";
import logo from '../../assets/website-logo1.jpg';
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
          flexDirection: "column"
        }}
      >
        <H1 sx={{ fontSize: "93px", pr: "50px" }}>EduTech</H1>
        <P sx={{ fontSize: "20px"}}>Building the Future of User Interfaces with Ours</P>

        <div className="logo_container">
          <Link
          to={"https://www.facebook.com/"}
          target="_blank"
        >
          {/* <img src={facebook} className="logo" /> */}
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          {/* <img src={instagram} className="logo" /> */}
        </Link>
        </div>
      </Grid>
      <Grid item md={6} sx={{mt:3}}>
        <img src={logo} width="500px" height="500px" style={{objectFit: "contain"}}/>
      </Grid>
    </Grid>
    </section>
  );
}

export default Home;

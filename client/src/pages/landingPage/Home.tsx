// import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";
// import { FACEBOOK_LOGO, INSTLOGO, LOGO } from "../../utils/constants";
// import { H1, P } from "../../components/Typography";
import { Button, Card, Stack } from "@mui/material";
import { HOMELOGO } from "../../utils/constants";
import { H1 } from "../../components/Typography";

function Home() {
  return (
    <section id="home">
      <Card sx={{ backgroundColor: "#343434", py: '100px', display: 'flex', justifyContent:"space-around" }}>
        <Stack>
          <H1 sx={{color: 'white', fontWeight:600 }}>STOCK TECH</H1>
        </Stack>
        <Stack sx={{border: '1px solid yellow',padding: '20px' }}>
          <Stack sx={{display: 'flex', justifyContent:"space-between", flexDirection:'row'}}>
            <Button color="inherit" sx={{backgroundColor: 'white',textTransform:'capitalize', margin:'10px'}}>
              Stocks
            </Button>
             <Button color="inherit" sx={{backgroundColor: 'white',textTransform:'capitalize', margin:'10px'}}>
              Features
            </Button>
             <Button color="inherit" sx={{backgroundColor: 'white',textTransform:'capitalize', margin:'10px'}}>
              Options
            </Button>
          </Stack>
          <img src={HOMELOGO} className="homelogo" />
        </Stack>
      </Card>
    </section>
  );
}

export default Home;

import { Container, Grid } from "@mui/material"
// import sub_logos from '../../assets/sub-logo3.jpg'
import { H1, P } from "../../components/Typography";
import {ABOUTLOGO} from '../../utils/constants'


function About() {
  return (
    <section id="about" className="sec">
        <H1 sx={{textAlign: "center", m:5}}>About Our EduTech</H1>
        <Grid container xs={12}>
            <Grid item  md={6}>
              <Container sx={{px:3,py:3, backgroundColor: "white", width: "550px", boxShadow: " 0 4px 8px 0 rgb(94 94 94 / 20%), 0 6px 20px 0 rgb(171 171 171 / 19%)", borderRadius: "10px"}}>
                <img src={ABOUTLOGO} className="sub-logo" title="Subject_logo" />
              </Container>
            </Grid>
            <Grid item  md={6} px={9} >
                 <P sx={{lineHeight: "1.7", letterSpacing:"1px"}}>We're passionate about empowering learners to become proficient in web development. Our educational platform offers in-depth courses and resources on HTML, CSS, JavaScript, and the JavaScript framework React. Whether you're a beginner starting your coding journey or a seasoned developer looking to sharpen your skills, we have something for you.</P>
            </Grid>
        </Grid>
    </section>
  )
}

export default About
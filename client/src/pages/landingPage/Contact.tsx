
import { Stack } from "@mui/material"
import { H1 } from "../../components/Typography"


function Contact() {
  return (
   <section id="contact" className="sec" style={{marginBottom: "20px"}}>
      <H1 sx={{textAlign: "center", m:5}}>Contact</H1>
      <form className="contact-container">
        <Stack  className="form-control">
            <label className="input-label">Name</label>
            <input type="text" name="name" className="input-control"/>
        </Stack>
        <Stack  className="form-control">
            <label className="input-label">Email</label>
            <input type="emial" name="email"  className="input-control"/>
        </Stack>
        <Stack  className="form-control">
            <label className="input-label">Message</label>
            <input type="text" name="name"  className="input-control"/>
        </Stack>
        <Stack>
          <button className="submit-btn">Submit</button>
        </Stack>
      </form>
   </section>
  )
}

export default Contact
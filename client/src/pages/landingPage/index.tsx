import Home from "../../layout/Home"
import Header from "../../layout/Header"
import About from "../../layout/About"
import Courses from "../../layout/Courses"
import Contact from "../../layout/Contact"

function LandingPage() {
  return (
      <>
          <Header />
          <Home />
          <About />
          <Courses />
          <Contact />
      </>
  )
}

export default LandingPage
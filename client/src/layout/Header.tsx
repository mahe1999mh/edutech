import { AppBar, Stack } from "@mui/material";
import { Link } from "react-scroll";

function Header() {
  return (
    <AppBar
      component="nav"
      sx={{
        p: 3,
        px: 4,
        backgroundColor: "#ffffff",
        color: "black",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <div>Logo</div>
        <Stack direction={"row"} spacing={3}>
          <Link
            activeClass="active"
            to="home"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="course"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            Courses
          </Link>
          <Link
            activeClass="active"
            to="contact"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default Header;

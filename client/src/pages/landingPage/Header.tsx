import { AppBar, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
 const navigate = useNavigate()
  const handleAction= (action: string) => {
    if(action === 'signin'){
       navigate('/signin')
    }else{
      navigate('/signup')
    }

  }
  return (
    <AppBar
      component="nav"
      sx={{
        p: 2,
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
            style={{ margin: '10px 15px'}}
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
            style={{ margin: '10px 15px'}}
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
            style={{ margin: '10px 15px'}}
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
            style={{ margin: '10px 15px'}}
          >
            Contact
          </Link>
          <Button
            // variant="contained"
            color="primary"
            size="small"
            className="btn"
            onClick={() => handleAction('signin')}
            sx={{
              padding: "0px 20px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            SignIn
          </Button>
          <Button
            // variant="contained"
            color="primary"
            size="small"
            className="btn"
             onClick={() => handleAction('signup')}
            sx={{
              padding: "0px 20px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            SignUp
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default Header;

import { Box, Button, Container } from "@mui/material";
import { H1, P } from "./Typography";

export default function NotFoundView() {
  return (
    <Container>
      <Box
        sx={{
          maxWidth: 480, 
          mx: 'auto',
          display: 'flex',
          minHeight: '50vh', 
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <H1 sx={{ mb: 3 }}>
          Sorry, page not found!
        </H1>

        <P sx={{ color: 'text.secondary' }}>
          Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped
          the URL? Be sure to check your spelling.
        </P>

        <Box
          component="img"
          src="https://cdn.dribbble.com/userupload/8726278/file/original-ab1bde6f9c74de5c8961f7fe84990cd4.gif"
          sx={{
            mx: 'auto', 
            height: 260, 
            p:0,
            m:0
          }}
        />

        <Button href="/" size="large" variant="contained">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

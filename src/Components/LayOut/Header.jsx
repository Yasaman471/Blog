import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
            وبلاگ من
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

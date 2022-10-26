// import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  // protected route
  // const navigate = useNavigate();

  // const signIn = async () => {
  //   navigate("/signin");
  // };

  return (
    <div>
      {/* <ResponsiveAppBar /> */}
      <AppBar position="static" style={{ background: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DTSMOVIES
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DTSMOVIES
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", align: "right" } }}>
              <Link to='signin' style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                style={{ background: "red", color: "white" }}
              >
                SIGN IN
              </Button>
                </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Card sx={{ maxWidth: "100%", background: "black", color: "white" }}>
        {/* <CardMedia component="img" alt="green iguana" height="140" image="./assets/images/bg_home.webp" /> */}
        <Typography gutterBottom variant="h3" component="div">
          DTSMOVIES
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography variant="body2">
            Watch anywhere. Cancel anytime. Ready to watch? Enter your email to
            create or restart your membership.
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link href='/signin' style={{ textDecoration: 'none' }}>
          <Button size="large" style={{ background: "red", color: "white" }}>
            GET STARTED
          </Button>
          </Link>
        </CardActions>
      </Card>

      <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ color: 'white', background: "black" }}>
        <Grid item xs={6} >
        <Typography component="h1" variant="h3" style={{ marginTop: '30vh', marginBottom: '20px' }}>
        Enjoy on your TV..</Typography>
          <Typography component="h3" variant="div">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Typography>
        </Grid>
        <Grid item xs={6}>
        <img src="./assets/images/bg_tv.png" alt="" />
        </Grid>
      </Grid>
    </Box>

    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ color: 'white', background: "black" }}>
        <Grid item xs={6}>
        <img src="./assets/images/bg_mobile.jpg" alt="" />
        </Grid>
        <Grid item xs={6}>
        <Typography component="h1" variant="h3" style={{ marginTop: '30vh', marginBottom: '20px' }}>
        Download your shows to watch offline.</Typography>
          <Typography component="h3" variant="div">
          Save your favorites easily and always have something to watch.</Typography>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ color: 'white', background: "black" }}>
        <Grid item xs={6} >
        <Typography component="h1" variant="h3" style={{ marginTop: '30vh', marginBottom: '20px' }}>
        Watch everywhere.</Typography>
          <Typography component="h3" variant="div">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Typography>
        </Grid>
        <Grid item xs={6}>
        <img src="./assets/images/bg_device.png" alt="" />
        </Grid>
      </Grid>
    </Box>

    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ color: 'white', background: "black" }}>
        <Grid item xs={6} md={6} sm={12}>
        <img src="./assets/images/bg_kid.png" alt="" />
        </Grid>
        <Grid item xs={6} >
        <Typography component="h1" variant="h3" style={{ marginTop: '30vh', marginBottom: '20px' }}>
        Create profiles for kids.</Typography>
          <Typography component="h3" variant="div">
          Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Typography>
        </Grid>
      </Grid>
    </Box>
    <Footer/>

    </div>
  );
};

export default LandingPage
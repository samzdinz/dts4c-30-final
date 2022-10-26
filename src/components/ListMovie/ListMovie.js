import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ResponsiveAppBar from "../navigation-bar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";

const ListMovie = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovie(response.data.results);
      });
  }, []);

  return (
    <div align="center">
      <ResponsiveAppBar />
      <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              MOVIE LIST
            </Typography>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {movies.map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                style={{ borderRadius: '20px' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                   
                  }}
                  image={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                  alt={`${item.title}`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  {/* <Typography>{item.genres}</Typography> */}
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button size="small" href='/detail'>See Detail</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ListMovie;

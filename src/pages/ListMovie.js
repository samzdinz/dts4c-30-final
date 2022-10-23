import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";

const ListMovie = () => {
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
      {/* <CssBaseline /> */}
      <Container maxWidth="sm">
        {movies.map((item, i) => {
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh"}} key={i} />;
          return (
            <Card sx={{ maxWidth: 345 }} style={{ marginTop:'10px', image: 'cover' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                  alt="images"
                />
                <CardContent style={{ background: 'black', color: 'white' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  {/* <Typography variant="body2" color="white">
                    {item.original_language}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default ListMovie;

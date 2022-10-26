import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../navigation-bar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';

const AboutPage = () => {
  return(
    <div>
      <ResponsiveAppBar />
      <Box style={{ marginBottom: '260px', marginTop: '10px' }}>
      <Container maxWidth="xs" >
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="white"
              gutterBottom
              style={{ marginBottom: '40px' }}
            >
              ABOUT
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Aplikasi ini merupakan aplikasi list movie yang dibangun dengan menggunakan TMDB API dengan Tech Stack Reactjs.
            </Typography> 
          </Container>
              </  Box>
              <Footer/>
    </div>
  )
}

export default AboutPage;
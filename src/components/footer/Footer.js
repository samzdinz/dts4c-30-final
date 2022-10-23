import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl" style={{ background: 'black', color: 'white', marginTop: '20px', padding: '10px' }}>
        <Typography variant="p" component="p">
          Copyright@DTS-REA-C 2022
        </Typography>
        
      </Container>
    </div>
  );
};

export default Footer;

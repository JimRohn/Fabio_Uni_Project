import { Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import PrimarySearchAppBar from "../components/SearchAppBar";
import cities from "../data.json";
import { ReactDOM } from "react";
import React from "react";
import Box from "@mui/material/Box";



const Home = () => (
  <Box   component="main" marginLeft={'500'}
  sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>


 
        {" "}
        {/*The Container component centres the content horizontally */}
        {cities.map((city) => (
          <>
        
            <Typography
              variant="h4"
              component="h2"
              marginTop={3}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={4}>
              {city.tours.map((tour, index) => 
                <TourCard tour={tour} key={index} />
              )}
            </Grid>
          </>
        ))}
    </Box>
);
export default Home;
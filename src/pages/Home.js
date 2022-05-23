import React from 'react';
import Container from "@mui/material/Container";
import cities from "../data.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TourCard from "../components/TourCard";

const Home = () => {
    return (
        <div className="App">
            <Container className="App" sx={{marginY: 5}}>
                {
                    cities.map((city, index) => (
                        <Box key={index}>
                            <Typography variant='h4' component='h2' marginTop={5} marginBottom={3}>
                                Top {city.name} Tours
                            </Typography>
                            <Grid container spacing={5}>
                                {
                                    city?.tours.map((tour, index) => (
                                        <TourCard key={index} tour={tour} />
                                    ))
                                }
                            </Grid>
                        </Box>
                    ))
                }

            </Container>
        </div>

    );
};

export default Home;

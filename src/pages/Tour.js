import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageGallery from "../components/ImageGallery";
import Box from "@mui/material/Box";
import CustomizedAccordions from "../components/Accordion";
import Footer from "../components/Footer";

const Tour = () => {
    return (
        <Container sx={{width: 900 }}>
            <Box>
                <Typography variant='h3' component='h1' marginTop={3}>
                    Explore the World in Toronto
                </Typography>
            </Box>

            <Box marginTop={3} sx={{display: 'flex'}}>
               <img
                   src="https://www.netnewsledger.com/wp-content/uploads/2021/03/Toronto-Marks-COVID-Deaths.jpg"
                   alt="Toronto"
                   height={325}
               />
               <ImageGallery />
            </Box>

            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='body2' component='p' marginTop={3}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam architecto dignissimos odio quisquam reiciendis repellat. Blanditiis consequuntur cum dolore dolorum error eum facere id ipsum labore, numquam omnis optio, quidem quod saepe sed sequi sit totam ullam ut veritatis?
                </Typography>
            </Box>

            <Box marginBottom={10}>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>

            <Box>
                <Footer />
            </Box>
        </Container>
    );
};

export default Tour;

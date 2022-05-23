import React from 'react';
import Paper from '@mui/material/Paper';
import {Rating, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {createTheme, ThemeProvider}  from '@mui/material'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

const customStyles = {
    box: {
        display: 'flex',
        alignItems: 'center'
    }
}

const TourCard = ({tour}) => {
    const {id, name, duration, rating, numberOfReviews, price, image} = tour


    return (
       <Grid item xs={12} sm={6} md={4} lg={3}>
           <ThemeProvider theme={theme}>
               <Paper elevation={3}>
                   <img className='img' src={image} alt={name}/>
                   <Box paddingX={1}>
                       <Typography variant='body1' component='h2'>
                           {name}
                       </Typography>

                       <Box sx={customStyles.box} >
                           <AccessTimeOutlinedIcon fontSize='small' />
                           <Typography variant='body2' component='p' sx={{fontSize: '0.8rem', marginLeft: '0.3rem'}}>
                               {duration} hours
                           </Typography>
                       </Box>

                       <Box sx={customStyles.box} marginTop={3}>
                           <Rating
                               name="read-only"
                               size='small'
                               value={rating}
                               readOnly
                               precision={0.5}
                           />
                           <Typography variant='body2' component='p' sx={{fontSize: '0.8rem', marginLeft: 0.5}}>
                               {rating}
                           </Typography>
                           <Typography variant='body3' component='p' sx={{fontSize: '0.8rem', marginLeft: 1.5}}>
                               ({numberOfReviews} reviews)
                           </Typography>
                       </Box>

                       <Box>
                           <Typography variant='h6' component='h3' marginTop={0} >
                               From C $ {price}
                           </Typography>
                       </Box>
                   </Box>

               </Paper>
           </ThemeProvider>
       </Grid>
    );
};

export default TourCard

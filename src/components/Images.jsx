import React from 'react'
import Image from './Image';
import { Grid } from '@mui/material';

const Images = ({ data }) => {
    console.log('data', data);
    return (
        <Grid container >
            {
              data.map(image => (
                  <Grid key = {image.id}xs = {3} item><Image image={image}/></Grid>
                ))
            }
         </Grid>
    )
}

export default Images

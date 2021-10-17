import { makeStyles } from '@material-ui/core'
import { Card } from '@mui/material'
import React from 'react'

const useStyles = makeStyles({
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
        
    }
})

const Image = ({ image }) => {
    const classes = useStyles();
    return (
        <Card>
        <img src={image.largeImageURL} className={classes.image}/>
        </Card>
    )
}

export default Image

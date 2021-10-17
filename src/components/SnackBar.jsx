import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    snack: {
        '& > *': {
            color: '#fff',
            backgroundColor: '#000000'
        }
    }
})

const SnackBar = ({open, toggleSnack}) => {
    const classes = useStyles();
    const handleClose = () => {
        toggleSnack(false);
      };
    return (
        <Snackbar className={classes.snack} open = {open} autoHideDuration={3000} onClose={handleClose}>
            <MuiAlert severity="info" onClose={handleClose}>
                No. of images between 3 and 200 allowed
            </MuiAlert>

        </Snackbar>
    )
}

export default SnackBar

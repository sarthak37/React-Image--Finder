import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        background: '#F6F6F6'
    }
})

const BreadCrumb = ({onTextChange,onCountChange}) => {
    const classes = useStyles();
    return (
        <Box className={classes.component}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  label="Search Images" variant="outlined" onChange={(e)=> onTextChange(e.target.value)} />
      <TextField  label="Number of Images" variant="outlined" onChange={(e)=> onCountChange(e.target.value)} />
    </Box>
    )
}

export default BreadCrumb

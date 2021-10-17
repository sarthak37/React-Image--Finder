import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CollectionsIcon from '@mui/icons-material/Collections';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        background: '#445A6F !important',
        color: 'white'
    }
})

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.component} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CollectionsIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Image Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}

export default Navbar

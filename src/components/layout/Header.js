import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    headerStyles: {
        flex: 1 
        //When styling, set to justify-conentn: flex-end 
    }
}))

const Header = () => {

    const classes = useStyles()

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>
                    This is our header
                </Typography>
                <Button className={classes.headerStyles}>Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

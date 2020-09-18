import React from 'react';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    headerStyles: {
        flexGrow: 1
        
    }
}))

const Header = () => {

    const classes = useStyles()

    //Link require manual load to work

    return (
        <AppBar position='static'>
            <Toolbar >
                <div className={classes.headerStyles}>
                    <Link to='/'>
                        <Typography >
                            Expanse
                        </Typography>
                    </Link>
                </div>
                    <Link to='/profile'>
                        <Button />Profile
                    </Link>
                    <Link to='/login'>
                        <Button />Login
                    </Link>
                    <Link to='/register'>
                        <Button />Register
                    </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

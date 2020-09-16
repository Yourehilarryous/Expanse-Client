import React from 'react';
import {Link} from 'react-router-dom'
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

    //Link require manual load to work

    return (
        <AppBar position='static'>
            <Toolbar>
                <Link to='/'>
                    <Typography>
                        This is our header
                    </Typography>
                </Link>
                <Link to='/profile'>
                    <Button className={classes.headerStyles}/>Profile
                </Link>
                <Link to='/login'>
                    <Button className={classes.headerStyles}/>Login
                </Link>
                <Link to='/register'>
                    <Button className={classes.headerStyles}/>Register
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

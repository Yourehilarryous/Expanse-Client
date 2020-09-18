import React, { Fragment, useState } from 'react';
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%'
    },
}));

const Login = () => {

    const classes = useStyles();

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    // const { email, password } = values

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = async e => {
        e.preventDefault()
        console.log(values)

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const email = values.email
            console.log(email)

            const password = values.password
            console.log(password)

            let body = {
                email: email,
                password: password
            }

            console.log(body)

            // body = JSON.stringify(body)
            // console.log(body)

            const baseURL = 'http://localhost:5001/api'

            const res = await axios.post('http://localhost:5001/api/auth', body, {withCredentials: true})
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Grid container xs={12} sm={8} style={{ padding: 10 }}>
            <div />
            <div className={classes.root}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.root} autoComplete="off" onSubmit={e => onSubmit(e)}>
                            <TextField
                                // variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={values.email}
                                onChange={handleChange('email')} />
                            <FormControl className={clsx(classes.margin, classes.textField)} >
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    // variant="outlined"
                                    margin="normal"
                                    required
                                    // fullWidth
                                    name="password"
                                    id="standard-adornment-password"
                                    label="Password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            > Sign In
                            </Button>

                            {/* <li><TextField
                                id="standard-basic"
                                label="Password"
                                variant="filled"
                                name='password'

                                onChange={e => onChange(e)} /></li> */}
                        </form>
                    </Grid>
                </div>
            </div>
        </Grid >
    );
}

export default Login;
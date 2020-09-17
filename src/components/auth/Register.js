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
        width: '25ch',
    },
}));

const Register = () => {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // })

    // const { name, email, password } = formData

    // const onChange = e => setFormData({
    //     ...formData, [e.target.name]: e.target.value
    // })

    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const {name, email, password} = values

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

        const newUser = {
            name,
            email,
            password
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser)

            const baseURL = 'http://localhost:5001/api'

            const res = await axios.post(`${baseURL}/users`, body, config)
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Fragment>
            <div className={classes.root}>
                <div>
                    <h1>Register</h1>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={e => onSubmit(e)}>
                        <ul>
                            <li><TextField
                                id="standard-basic"
                                label="Name"
                                variant="filled"
                                required
                                name='name'
                                value={values.name}
                                onChange={handleChange('name')} /></li>
                            <li><TextField
                                id="standard-basic"
                                label="Email"
                                variant="filled"
                                required
                                name='email'
                                value={values.email}
                                onChange={handleChange('email')} /></li>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
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
                        </ul>
                    </form>
                </div>
            </div>
        </Fragment >
    );
}

export default Register;

import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Loginsigup.css';
import Reactparticleforlogin from '../../Reactparticleforlogin';
export const Loginsigup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({ user: '', password: '' });
    const [formErrors, setFormErrors] = useState({ user: '', password: '' });

    const handleChange = (prop) => (event) => {
        setFormValues({ ...formValues, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validate = () => {
        let errors = {};
        if (!formValues.user) {
            errors.user = 'User is required';
        }
        if (!formValues.password) {
            errors.password = 'Password is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Form Submitted', formValues);
            navigate('/dashboard');
        }
    };
    const handleGoogleSignIn = () => {
        // Redirect to Google sign-in page
        // Replace with your actual Google sign-in URL
        const googleSignInUrl = 'https://accounts.google.com/signin/v2/identifier?service=mail';
        window.location.href = googleSignInUrl;
    };
    const registerAccount = ((event) => {
        event.preventDefault();

        console.log('regsteration process')
        navigate('/registration');

    })
    return (
        <><><Reactparticleforlogin />
            <div className="form-container">
                <form className='wrapper' onSubmit={handleSubmit}>
                    <img src="./assest/Borcelle.png" alt="Grocery" className="animated-image" />
                    {/* <video width="600" controls>
<source src="./assest/logovedio.mp4" type="video/mp4" />
</video> */}
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-user"
                            label="User"
                            placeholder="User *"
                            multiline
                            value={formValues.user}
                            onChange={handleChange('user')}
                            error={!!formErrors.user}
                            helperText={formErrors.user} />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={formValues.password}
                            onChange={handleChange('password')}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}
                            label="Password"
                            error={!!formErrors.password} />
                        <FormHelperText error={!!formErrors.password}>
                            {formErrors.password}
                        </FormHelperText>
                    </FormControl>
                    <div className="btn">
                        <Button variant="contained" type="submit" sx={{ m: 1, width: '15ch' }} onClick={registerAccount} style={{ backgroundColor: 'darkslategrey' }}>
                            Register
                        </Button>
                        <Button variant="contained" type="submit" sx={{ m: 1, width: '15ch' }} style={{ backgroundColor: '#993333' }}>
                            Submit
                        </Button>
                    </div>

                    <div className="">
                        <a href="#" onClick={handleGoogleSignIn}>
                            <img src="./assest/google.png" style={{ marginTop: '2rem' }} alt="Google Sign-In" />
                        </a>                </div>
                </form>
            </div>
        </><Reactparticleforlogin /></>

    );
};

export default Loginsigup;

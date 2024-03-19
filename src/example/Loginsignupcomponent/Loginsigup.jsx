import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing visibility icons
// import bcrypt from 'bcryptjs';
// import Header from "./src/example/Headercomponent/Header.jsx";
import Header from '../Headers/Header';
import About from '../About/About';
import './Loginsigup.css';
import Languages from '../LanguagesKnow/Languages';
import Experience from '../Experience/Experience';

export const Loginsigup = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const { username, password } = data;
    const change = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleLoginClick = () => {
        console.log(data);
        console.log('entered');
        // e.preventDefault();
        // const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password synchronously
        // console.log('Hashed password:', hashedPassword)
    }
    const signup = () => {
        console.log('Signup entered')
    }

    return (
        <div className='wrapper  '>
            {/* <div className='loginpage csssfont'> */}
            {/* <h2>SPEED CHECK</h2> */}
            <form  className='scrolllist page-height'>
                <Header />
                <About />
                <Languages />
                <Experience />
            

            </form>
            {/* </div> */}
        </div>

    );
};

export default Loginsigup;

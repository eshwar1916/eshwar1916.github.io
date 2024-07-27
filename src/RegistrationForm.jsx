import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [identityPicture, setIdentityPicture] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        specialization: '',
        specificFoodItem: '',
        identityPicture: null
    });
    const specificationvalues = [
        { value: "IT", label: "Italian" },
        { value: "Ch", label: "Chinese" },
        { value: "MX", label: "Mexican" },
        { value: "In", label: "Indian" },
        { value: "Other", label: "Other" }
    ];
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (field) => (event) => {
        console.log(`Changing ${field}:`, event.target.value); // Debug log
        setFormValues({ ...formValues, [field]: event.target.value });
    };
    const RegistrationForm = (event) => {

        console.log(formValues)

    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIdentityPicture(file);
            setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL for the selected image
        }
    };

    const handleButtonClick = () => {
        document.getElementById('upload-identity-picture').click();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <img src="./assest/Borcelle.png" alt="Grocery" className="animated-image" />
                <div className="wrapperclass scrolllist content-height">
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-first-name"
                            label="First Name"
                            placeholder="First Name *"
                            value={formValues.firstName}
                            onChange={handleChange('firstName')}
                            error={!!formErrors.firstName}
                            helperText={formErrors.firstName}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-last-name"
                            label="Last Name"
                            placeholder="Last Name *"
                            value={formValues.lastName}
                            onChange={handleChange('lastName')}
                            error={!!formErrors.lastName}
                            helperText={formErrors.lastName}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-email"
                            label="Email"
                            placeholder="Email *"
                            type="email"
                            value={formValues.email}
                            onChange={handleChange('email')}
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-phone"
                            label="Phone Number"
                            placeholder="Phone Number *"
                            type="tel"
                            value={formValues.phone}
                            onChange={handleChange('phone')}
                            error={!!formErrors.phone}
                            helperText={formErrors.phone}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-address"
                            label="Address"
                            placeholder="Address *"
                            multiline
                            value={formValues.address}
                            onChange={handleChange('address')}
                            error={!!formErrors.address}
                            helperText={formErrors.address}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Specialization IN"
                            value={formValues.specificFoodItem}
                            onChange={handleChange('specificFoodItem')}
                            error={!!formErrors.specificFoodItem}
                        >
                            {specificationvalues.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <TextField
                            id="outlined-specific-food-item"
                            label="Specific Food Item"
                            placeholder="Specific Food Item *"
                            value={formValues.specificFoodItem}
                            onChange={handleChange('specificFoodItem')}
                            error={!!formErrors.specificFoodItem}
                            helperText={formErrors.specificFoodItem}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <input
                            accept="image/*"

                            id="upload-identity-picture"
                            type="file"
                            style={{ display: 'none' }} // Hide the file input
                            onChange={handleFileChange}
                        />
                        <Button
                            variant="contained"
                            component="span"
                            sx={{ m: 4, width: '30ch' }}
                            onClick={handleButtonClick} // Trigger the file input click
                        >
                            Upload Identity Picture
                        </Button>
                        {previewUrl && (
                            <div style={{ marginTop: '1rem' }}>
                                <img
                                    className='scrolllist content-height'
                                    src={previewUrl}
                                    alt="Selected Preview"
                                    style={{ maxWidth: '100%', maxHeight: '200px' }} // Adjust the size as needed
                                />
                            </div>
                        )}
                    </FormControl>
                    <div className="btn">
                        <Button variant="contained" type="submit" onClick={RegistrationForm} sx={{ m: 1, width: '15ch' }} style={{ backgroundColor: 'darkslategrey' }}>
                            Register
                        </Button>
                        {/* <Button variant="contained" sx={{ m: 1, width: '15ch' }} style={{ backgroundColor: '#993333' }}>
                        Submit
                    </Button> */}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;

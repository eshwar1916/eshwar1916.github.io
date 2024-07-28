import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './RegistrationForm.css';
import { Close as CloseIcon, ZoomOutMap as ZoomOutMapIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from 'react-router-dom';
import './App.css'
import ReactParticles from './ReactParticles';


const RegistrationForm = () => {
    const [selectedOption, setSelectedOption] = useState('');



    const navigate = useNavigate();
    const [identityPicture, setIdentityPicture] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [sucessfullDailog, setsucessfullDailog] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        specialization: '',
        specificFoodItem: '',
        identityPicture: null
    };

    const [formValues, setFormValues] = useState(initialValues);




    const validationRules = {
        firstName: { required: true, pattern: /^[a-zA-Z\s]*$/, message: 'First Name is required ' },
        lastName: { required: true, pattern: /^[a-zA-Z\s]*$/, message: 'Last Name is required ' },
        email: { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Email is required ' },
        phone: { required: true, pattern: /^\d+$/, message: 'Phone number is required ' },
        address: { required: true, message: 'Address is required' },
        specialization: { required: true, message: 'Specialization is required' },
        specificFoodItem: { required: true, message: 'Specific Food Item is required' },
    };

    const validate = () => {
        let errors = {};

        for (const field in validationRules) {
            if (validationRules[field].required && !formValues[field]) {
                errors[field] = validationRules[field].message;
            }
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };




    const specificationvalues = [
        { value: "IT", label: "Italian" },
        { value: "Ch", label: "Chinese" },
        { value: "MX", label: "Mexican" },
        { value: "In", label: "Indian" },
        { value: "Other", label: "Other" }
    ];

    const handleChange = (field) => (event) => {
        console.log(`Changing ${field}:`, event.target.value); // Debug log
        setFormValues({ ...formValues, [field]: event.target.value });
    };

    const RegistrationForm = (event) => {
        console.log('Form Submitted', formValues);
        navigate('/');

        console.log(formValues)

    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClosePreview = () => {
        setPreviewUrl(null);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const resetForm = () => {
        setFormValues(initialValues);
        setPreviewUrl(null);
        setSelectedOption();
    }
    const successfullyregistered = () => {
        if (validate()) {
            console.log('entered');
            console.log(formErrors);
            setsucessfullDailog(true)
        }

    }

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
                <div className="bgcontainer">
                    <img src="./assest/Borcelle.png" alt="Grocery" className="animated-image" />
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '5rem', marginBottom: '1rem' }}>
                        <div
                            className={`selectioncss ${selectedOption === 'chef' ? 'selected' : ''}`}
                            onClick={() => setSelectedOption('chef')}
                        >
                            <input
                                type="radio"
                                id="chef"
                                name="userType"
                                value="chef"
                                checked={selectedOption === 'chef'}
                                onChange={handleOptionChange}
                                style={{ display: 'none' }}
                            />
                            <img src='./assest/cheflogin.png' style={{ height: '2rem' }} alt="Chef" />
                            <span className=''>CHEF</span>
                        </div>
                        <div
                            className={`selectioncss ${selectedOption === 'customer' ? 'selected' : ''}`}
                            onClick={() => setSelectedOption('customer')}
                        >
                            <input
                                type="radio"
                                id="customer"
                                name="userType"
                                value="customer"
                                checked={selectedOption === 'customer'}
                                onChange={handleOptionChange}
                                style={{ display: 'none' }}
                            />
                            <img src='./assest/customer.png' style={{ height: '2rem' }} alt="Customer" />
                            <span className=''>CUSTOMER</span>
                        </div>
                    </div>
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

                        {selectedOption === 'chef' && (
                            <>
                                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                                    <TextField
                                        id="outlined-specificFoodItem"
                                        select
                                        label="Specialization IN"
                                        value={formValues.specialization}
                                        onChange={handleChange('specialization')}
                                        error={!!formErrors.specialization}
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
                                        <div style={{ marginTop: '1rem', position: 'relative' }}>
                                            <img
                                                className='scrolllist content-height'
                                                src={previewUrl}
                                                alt="Selected Preview"
                                                style={{ maxWidth: '100%', maxHeight: '200px' }} // Adjust the size as needed
                                            />
                                            <IconButton
                                                onClick={handleClosePreview}
                                                style={{ position: 'absolute', top: 0, right: 0, color: 'white', background: 'red' }}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={handleOpenDialog}
                                                style={{ position: 'absolute', top: 0, left: 0, color: 'white', background: 'black' }}
                                            >
                                                <ZoomOutMapIcon />
                                            </IconButton>
                                        </div>
                                    )}
                                </FormControl>
                                
                                <Dialog
                                    open={openDialog}
                                    onClose={handleCloseDialog}
                                    maxWidth="md"
                                    fullWidth
                                >
                                    <DialogContent>
                                        <img
                                            src={previewUrl}
                                            alt="Selected Preview"
                                            style={{ width: '100%', height: '25rem' }} // Full-size image
                                        />
                                    </DialogContent>
                                </Dialog>

                                
                            </>
                        )}
                    </div>
                    <div className="btn">
                        <Button variant="contained" type="submit" onClick={resetForm} sx={{ m: 1, width: '15ch' }} style={{ backgroundColor: '#9a1f1f' }}>
                            RESET
                        </Button>
                        <Button variant="contained" type="submit" onClick={successfullyregistered} sx={{ m: 1, width: '15ch' }} style={{ backgroundColor: 'darkslategrey' }}>
                            Register
                        </Button>
                        <Dialog
                            open={sucessfullDailog}
                            onClose={handleCloseDialog}
                            maxWidth="md"
                            fullWidth
                        >
                            <DialogContent>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                                    <img src="./assest/correct.gif" />
                                    <h3>Hurry!!</h3>
                                    <h3>SUCCESSFULLY CREATED</h3>
                                    <div className="btn">
                                        <Button variant="contained" type="submit" onClick={RegistrationForm} style={{ backgroundColor: '#993333' }}>
                                            GO BACK TO LOGIN
                                        </Button>
                                    </div>
                                    <ReactParticles />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </form>

        </div >
    );
};

export default RegistrationForm;

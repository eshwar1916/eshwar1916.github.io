import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faUser, faCircle } from '@fortawesome/free-solid-svg-icons';
import { List, ListItem } from '@material-ui/core';
import "./Dashboard.css";
import { StyledBackdrop, ModalContent, style } from '../../styled';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useNavigate } from 'react-router-dom';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled, css } from '@mui/system';
import { Button, Modal, TextField, DialogContent as BaseModalContent } from '@mui/material';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import clsx from 'clsx';




const Dashboard = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // To pause animation on hover
    const cardImages = ["./assest/title background.webp", "./assest/gocerymain2.jpg", "./assest/groceryimage1.jpg", "./assest/grocery3.webp", "./assest/ketchup.webp", "./assest/coffee.jpg", "./assest/oats.jpg"];
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCartClick = () => {
        console.log("Cart button clicked");
    };

    const handleUserClick = () => {
        console.log("User button clicked");
    };

    const handleClick = () => {
        console.log('search')
    };

    const profile = () => {
        console.log("Profile");
    };

    const account = () => {
        console.log("account btn");
    };

    const rechef = () => {
        console.log("Re-CONNECT")
    };

    const logout = () => {
        console.log("logout btn");
        navigate('/');
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='bgContainer'>
            <div className="content">
                <img src="./assest/Borcelle.png" alt="Grocery" className="animated-image" />
                <div className="listEnd">
                    <List className="listItemContainer">
                        <ListItem button onClick={profile} className="listItem">
                            <img src="./assest/chef.png" alt="Chef Icon" />
                            <span>CHEF</span>
                        </ListItem>
                        <ListItem button onClick={rechef} className="listItem">
                            <img src="./assest/rechef.png" alt="Re-CONNECT Icon" />
                            <span>Re-CONNECT</span>
                        </ListItem>
                        <ListItem button onClick={account} className="listItem">
                            <img src="./assest/user.png" alt="User Icon" />
                            <span>USER</span>
                        </ListItem>
                        <ListItem button onClick={handleOpen} className="listItem">
                            <PowerSettingsNewOutlinedIcon />
                            <span>LOG OUT</span>
                        </ListItem>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            slots={{ backdrop: StyledBackdrop }}>
                            <ModalContent sx={style}>
                                <p id="parent-modal-description" className="modal-description">
                                    ARE YOU SURE TO LOGOUT
                                </p>
                                <div style={{ display: 'flex' }}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{ m: 1, width: '15ch' }}
                                        style={{ backgroundColor: 'darkslategrey' }}
                                        onClick={handleClose}>
                                        CANCEL
                                    </Button>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{ m: 1, width: '15ch' }}
                                        style={{ backgroundColor: '#993333' }}
                                        onClick={logout}>
                                        LOGOUT
                                    </Button>
                                </div>
                            </ModalContent>
                        </Modal>
                    </List>
                </div>
            </div>
            <div className="icon-container">
                <div className="image"></div>
            </div>
            <div className="menulist">
                <div className="liststart" onClick={handleClick}>
                    <SearchOutlinedIcon />
                </div>
                <div className="listEnd">
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }} onClick={handleCartClick}>
                        <img src="./assest/location.png" />
                        <FavoriteBorderOutlinedIcon icon={faCartShopping} />
                        <div className="spacer"></div>
                        <SupportAgentOutlinedIcon icon={faUser} onClick={handleUserClick} />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="menuList">
                        {/* Your menu list items go here */}
                    </div>
                )}
            </div>
            <div className="secondmenu">
                <div>
                    <img src="./assest/icons8-offer-50.png" /> <span style={{
                        color: 'darkred',
                        position: 'relative',
                        bottom: '1.2rem',
                        left: '0.1rem',
                    }}>OFFER ZONE</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircle} fade style={{
                        color: "#009419",
                        position: 'relative',
                        bottom: ' 1.1rem',
                        left: '0.4rem',
                    }} /><img src="./assest/chef.png" /><span style={{
                        color: 'darkred',
                        position: 'relative',
                        bottom: '1.2rem',
                        left: '0.3rem',
                    }}>Available Chef</span>
                </div>
            </div>
            <div className='groceryImageMain'>
                <marquee behavior="scroll" direction="left">
                    {cardImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Grocery Background ${index + 1}`}
                            className="groceryImage"
                            style={{
                                marginRight: '10px', // Adjust spacing between images if needed
                            }}
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)}
                        />
                    ))}
                </marquee>
            </div>
        </div>
    );
}

export default Dashboard;

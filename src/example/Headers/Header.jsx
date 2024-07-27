import React from 'react'
// import './Header.css';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptop, faPhone,faUserTie  } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as FaArrowUp19 } from './arrow-up-1-9-solid.svg';
<FontAwesomeIcon icon="fa-solid " />

const menuItems = [
    { id: 'overView', label: 'About', icon: faUser },
    { id: 'languages', label: 'Languages', icon: faLaptop },
    { id: 'experience', label: 'Experience',icon: faUserTie   },
    { id: 'contact', label: 'Contact', icon: faPhone }
];

function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="headerNameCss">
                        <h4><FontAwesomeIcon icon={faUser} style={{ color: 'aqua' }} />VALLURU KAASIESHWAR</h4>
                    </div>
                </div>


                <div className="col-6">
                    <div className='outerCss'>
                        <nav>
                            <ul>
                                {menuItems.map(item => (
                                    <li key={item.id}>
                                        <FontAwesomeIcon icon={item.icon} className='iconsCss' />      <a href={`${item.id}`}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
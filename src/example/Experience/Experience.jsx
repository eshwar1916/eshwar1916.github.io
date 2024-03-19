// Experience.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Experirence.css'; // Corrected import statement

function Experience() {
    const cards = [
        { id: 1, name: 'Oxygen Project (Logistics)', className: 'oxyzen', description1: 'As a Front-end Angular Developer on the Oxygen project, I was responsible for creating a user-friendly web interface and ensuring seamless integration with the back-end systems', description2: 'Implemented responsive design principles and utilized Angular to create dynamic, data-driven user interfaces that enhanced the overall user experience.', description3: 'My role involved close collaboration with cross-functional teams to deliver a high-quality web application that met project goals' },
        { id: 2, name: 'Track On Project (Logistics):', className: 'trackon', description1: 'In the Track On project, I played a pivotal role in designing and developing dynamic dashboards and data visualizations using Angular.', description2: 'I focused on user authentication and authorization mechanisms to ensure secure access to real-time data insights.', description3: "My contributions included code optimization and collaboration with UX/UI teams to align the front-end design with user expectations." },
        { id: 3, name: 'Sassify (Logistics):', className: 'sassify', description1: 'In the SASSIFY project, I played a crucial role as a frontend developer, focusing on creating responsive UI screens tailored to the needs of the logistics company owned by Oxyzen', description2: 'My responsibilities included designing and developing responsive UI screens for various modules, particularly for consignor and consignee-based functionalities', description3: 'I ensured that these screens were not only visually appealing but also highly functional and user-friendly Additionally, I collaborated with the UX/UI teams to ensure alignment with user expectations and worked on optimizing code for better performance.' },
        { id: 4, name: 'SBWC (Saudi Project):', className: 'sbwc', description1: 'As a Front-end Angular Developer in the SBWC (Dubai project), I worked on  designing and developing complex Angular components', description2: 'My role included integrating third-party APIs and services to enhance application functionality and performance', description3: 'I provided mentorship to junior developers, conducted code reviews, and contributed to a highly productive and collaborative team environment' },
        { id: 5, name: 'RTMS (ROUTE TRACKING MONITERING SYSTEM):', className: 'rtms', description1: 'Developed complex Angular components for the Route Tracking Monitoring  System (RTMS) in the OXYZEN project.', description2: 'Integrated Google API key and services to enhance application functionality and performance.', description3: 'Implemented live vehicle tracking on Google Maps, displaying real-time movement of vehicles Displayed historical route data and pickup/delivery events on the map.' },
    ];

    return (
        <div>
            <h2>Experience</h2>
            <div className="cardcontainer">
                {cards.map(card => (
                    <Card key={card.id} className={`card ${card.className}`}>
                        <CardContent>
                            <h3><b style={{color:'black'}}>{card.name}</b></h3>
                            <p  style={{color:'grey'}}>{card.description1}</p>
                            <p style={{color:'grey'}}>{card.description2}</p>
                            <p style={{color:'grey'}}>{card.description3}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Experience;

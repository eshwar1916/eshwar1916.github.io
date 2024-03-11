import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './Languages.css';

function Languages() {
    const cards = [
        { id: 1, name: 'Angular', description: 'A platform for building mobile and desktop web applications.', className: 'angular-card', imageUrl: 'assest/angular.webp' },
        { id: 2, name: 'HTML', description: 'The standard markup language for creating web pages.', className: 'html-card', imageUrl: 'assest/html.jpg' },
        { id: 3, name: 'TypeScript', description: 'A superset of JavaScript that adds optional static typing.', className: 'typescript-card', imageUrl: 'assest/typescript.svg' },
        { id: 4, name: 'BootStrap', description: 'A platform for building mobile and desktop web applications.', className: 'bootstrap-card', imageUrl: 'assest/bootstrap.png' },
        { id: 5, name: 'CSS', description: 'A platform for building mobile and desktop web applications.', className: 'css-card', imageUrl: 'assest/css.png' },
        { id: 6, name: 'JavaScript', description: 'A platform for building mobile and desktop web applications.', className: 'js-card', imageUrl: 'assest/js.webp' },
        { id: 7, name: 'MySQL', description: 'A platform for building mobile and desktop web applications.', className: 'sql-card', imageUrl: 'assest/MySQL-Logo.webp' },
        { id: 7, name: 'JAVA', description: 'A platform for building mobile and desktop web applications.', className: 'java-card', imageUrl: 'assest/java.png' },
    ];

    return (
        <div>
            <h2>Languages</h2>
            <div className="card-container scrolllist cards-height">
                {cards.map(card => (
                    <Card key={card.id} className={`card ${card.className}`}>
                        <CardContent>
                            <h3>{card.name}</h3>
                            <img src={card.imageUrl} alt={card.name} className="card-image imgCss" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Languages;

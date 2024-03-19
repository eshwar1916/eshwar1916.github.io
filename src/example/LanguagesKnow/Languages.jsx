import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './Languages.css';

function Languages() {
    const cards = [
        { id: 1, name: 'Angular', className: 'angular-card', imageUrl: './portfolio/assest/angular.png' },
        { id: 2, name: 'HTML', className: 'html-card', imageUrl: './portfolio/assest/html.png' },
        { id: 3, name: 'TypeScript', className: 'typescript-card', imageUrl: './portfolio/assest/typescript.svg' },
        { id: 4, name: 'BootStrap', className: 'bootstrap-card', imageUrl: './portfolio/assest/bootStrap.png' },
        { id: 5, name: 'CSS', className: 'css-card', imageUrl: './portfolio/assest/css.png' },
        { id: 6, name: 'JavaScript', className: 'js-card', imageUrl: './portfolio/assest/js.webp' },
        { id: 7, name: 'MySQL', className: 'sql-card', imageUrl: './portfolio/assest/MySQL-Logo.webp' },
        { id: 7, name: 'JAVA', className: 'java-card', imageUrl: './portfolio/assest/java.png' },
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

import React, { useState } from 'react';
import Project from '../Project';

function Work() {

    const [projects] = useState([
        {
            name: 'Git Cookin',
            description: 'Full Stack Project',
            link: 'https://git-cookin.herokuapp.com'
        },
        {
            name: 'COVID Travel Tracker',
            description: 'Front End Development Project',
            link: 'http://d-belleza.github.io/covid-traveling'
        },
        {
            name: 'Weather Dashboard',
            description: 'Open Weather Map API',
            link: 'http://d-belleza.github.io/weather-dashboard'
        },
        {
            name: 'Mixed Reality Studio',
            description: 'Senior Design Project',
            link: 'https://github.com/d-belleza/MxR-Embedded-System'
        }
    ])

    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Work;
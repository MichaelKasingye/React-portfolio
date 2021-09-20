import React from 'react'
import {about} from '../Data/data'
function About() {
    return (
        <div className="about">
            <h1 className="title">About</h1>
            <div className="about-info">
            <p>{about}</p>

            </div>
        </div>
    )
}

export default About

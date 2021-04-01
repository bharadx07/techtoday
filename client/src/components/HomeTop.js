import React from 'react'
import { Link } from 'react-router-dom'

function HomeTop() {
    return (
        <div className="home-top">
            <h1>TechToday</h1>
            <h4>TechToday is the Source for Technology Related News and Jobs in Many Industries</h4>
            <Link to="/register"><button>Try TechToday Now</button></Link>
        </div>
    )
}

export default HomeTop

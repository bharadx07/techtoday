import React from 'react'
import { Link } from 'react-router-dom'

function HomeTop() {
    return (
        <div className="home-top">
            <h1>TechToday</h1>
            <h4>TechToday is the Source for News and Jobs in the Tech Industry</h4>
            <Link to="/register"><button>Try TechToday Now</button></Link>
        </div>
    )
}

export default HomeTop

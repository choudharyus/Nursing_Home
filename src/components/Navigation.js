import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navLink">
            <NavLink className="nav1" to="/components/NursingHome">Nursing Homes</NavLink>
            <NavLink className="nav2" to="/components/Penalties">Penalties & Violations</NavLink>
            <NavLink className="nav3" to="/components/Quality">Quality Points</NavLink>
            <NavLink className="nav4" to="/components/Capacity">Facility Capacity</NavLink>
            <NavLink className="nav5" to="/components/About">About</NavLink>
            <NavLink exact className="nav6" to="/components/Disclaimer">Disclaimer</NavLink>
        </div>
    )
}
export default Navigation;

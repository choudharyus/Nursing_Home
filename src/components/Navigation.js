import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="flex-container">
            <div><NavLink className="nav1" to="/components/NursingHome">Nursing Homes</NavLink></div>
            <div><NavLink className="nav1" to="/components/Penalties">Penalties & Violations</NavLink></div>
            <div><NavLink className="nav1" to="/components/Quality">Quality Points</NavLink></div>
            <div><NavLink className="nav1" to="/components/Capacity">Facility Capacity</NavLink></div>
            <div><NavLink className="nav1" to="/components/About">About</NavLink></div>
            <div><NavLink exact className="nav1" to="/components/Disclaimer">Disclaimer</NavLink></div>
        </div>
    )
}
export default Navigation;

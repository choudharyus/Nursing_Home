import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to="/components/NursingHome">Nursing Homes</NavLink><br></br>
            <NavLink to="/components/Penalties">Nursing Homes with Penalties</NavLink>
        </div>
    )
}
export default Navigation;

//<NavLink to="/components/Home">Home</NavLink><br></br>
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
import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedInLink  = () => {

    return (
        <ul className="right">
            <li><NavLink to="/"> New Workout</NavLink></li>
            <li><NavLink to="/">Sign Out</NavLink></li>
            <li><NavLink to="/" className=" btn btn-floating black"> Ray</NavLink></li>
        </ul>
    )
}

export default SignedInLink
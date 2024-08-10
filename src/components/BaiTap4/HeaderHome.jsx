import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {
    return (
        <header className='bg-dark text-white'>
            <nav className='p-2'>
                <NavLink to="/" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 fw-bold text-decoration-none' : 'mx-2 text-white link'}>Home</NavLink>
                <NavLink to="/login" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 fw-bold text-decoration-none' : 'mx-2 text-white link'}>Login</NavLink>
                <NavLink to="/user/login" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 fw-bold text-decoration-none' : 'mx-2 text-white link'}>User Login</NavLink>
                <NavLink to="/about" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 fw-bold text-decoration-none' : 'mx-2 text-white link'}>About</NavLink>
                <NavLink to="/contact" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 fw-bold text-decoration-none' : 'mx-2 text-white link'}>Contact</NavLink>
                <NavLink to="/search" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 fw-bold text-decoration-none' : 'mx-2 text-white link'}>Search</NavLink>
            </nav>
        </header>
    )
}

export default HeaderHome
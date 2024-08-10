import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProductManagement = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
                    <div className='sidebar-sticky'>
                        <ul className='nav flex-column'>
                            <li className='nav-item'>
                                <NavLink className='navbar-brand fw-bold fs-5' to='/product-management'>
                                    <i className="fa fa-home text-dark pe-2" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/product-management'>
                                    Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default ProductManagement
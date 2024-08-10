import React from 'react'
import { Outlet } from 'react-router-dom'

const UserPageMaster = () => {
    return (
        <div className=''>
            <div className='' style={{ minHeight: '100vh', background: 'url(https://picsum.photos/2000/2000)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='w-100 d-flex justify-content-center align-items-center' style={{ background: 'rgba(0,0,0,.5)', minHeight: '100vh' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserPageMaster
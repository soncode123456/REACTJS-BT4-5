import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminPageMaster = () => {
  return (
    <div>
        <h1>Admin Dashboard</h1>
        <Outlet/>
    </div>
  )
}

export default AdminPageMaster
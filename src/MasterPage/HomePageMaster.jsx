import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/BaiTap4/HeaderHome'

const HomePageMaster = () => {
  return (
    <>
        <HeaderHome/>
        
        <div className='content' style={{minHeight:500}}>
            <Outlet/>
        </div>

        <footer className='bg-dark fs-1 text-white text-center'>
            Footer
        </footer>
    </>
  )
}

export default HomePageMaster
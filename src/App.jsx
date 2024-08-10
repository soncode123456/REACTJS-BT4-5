import React from 'react'

// Cấu hình react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Search from './pages/Search'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import HeaderHome from './components/BaiTap4/HeaderHome'
import HomePageMaster from './MasterPage/HomePageMaster'
import UserPageMaster from './MasterPage/UserPageMaster'
import Register from './pages/Register'
import ListProduct from './pages/ListProduct'
import CreateProduct from './pages/CreateProduct'
import UpdateProduct from './pages/UpdateProduct'
import ProductManagement from './MasterPage/ProductManagement'
import Page404 from './pages/Page404'
import ProFile from './pages/Profile'
import ForgotPass from './pages/ForgotPass'
import Detail from './pages/Detail'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='' element={<HomePageMaster />}>
          <Route index element={<HomePage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='profile' element={<ProFile/>}></Route>
          <Route path='search' element={<Search/>}></Route>
          <Route path='detail'>
            <Route path=':prodId' element={<Detail/>}></Route>
          </Route>
          <Route path='*' element={<Page404/>}></Route>
        </Route>

        <Route path='user' element={<UserPageMaster />}>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='forgot-pass' element={<ForgotPass/>}></Route>
          <Route path='*' element={<Page404/>}></Route>
        </Route>


        <Route path='product-management' element={<ProductManagement />}>
          <Route index element={<ListProduct />}></Route>
          <Route path='create-product' element={<CreateProduct />}></Route>
          <Route path='update-product'>
            <Route path=':id' element={<UpdateProduct/>}></Route>
          </Route>
          <Route path='*' element={<Page404/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
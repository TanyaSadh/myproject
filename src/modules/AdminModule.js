import React from 'react'
import Header from '../components/admin/shared/Header'
import Footer from '../components/admin/shared/Footer'
import { Outlet } from 'react-router-dom'
const AdminModule = () => {
  return (
    <>
    <Header/>
  <div style={{minHeight:"600px"}}>  
  <Outlet/>
  </div>
   
    <Footer/>
    </>
  )
}

export default AdminModule
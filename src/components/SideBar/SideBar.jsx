import React from 'react'
import AccountToggle from '../../components/SideBar/AccountToggle'
import RouteSelect from '../../components/SideBar/RouteSelect'
import Footer from '../../components/SideBar/Footer'

const SideBar = () => {
  return (
    <div className='h-screen shadow-md w-58 bg-gray-800 text-white p-4 hidden md:flex flex-col'  >
      <AccountToggle />
      <RouteSelect />
      <Footer />


    </div>
  )
}

export default SideBar
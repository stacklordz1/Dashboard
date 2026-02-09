import React from 'react'
import TopSection from '../../components/SideBar/TopSection'    
import RouteSelect from '../../components/SideBar/RouteSelect'


const Layout = () => {
    return (
        <div className=' hidden md:flex flex-col w-58 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white m-0 p-4 pt-6'>
            <TopSection />
            <RouteSelect />
        </div>
    )
}

export default Layout

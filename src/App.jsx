import React from 'react'
import Layout from './components/SideBar/Layout'
import DashBoard from './components/DashBoard/DashBoard'

const App = () => {
  return (
    <div className=' flex justify-between min-h-screen bg-slate-900'>
      {/* SideBar layout */}
      <Layout />
      <DashBoard />
    </div>
  )
}

export default App

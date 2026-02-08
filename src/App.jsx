import React, { useState } from 'react'
import SideBar from './components/SideBar/SideBar'


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#4c4d4c] text-white flex">
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <SideBar />
      </div>

    </div>
  )
}

export default App

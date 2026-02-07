import React from 'react'
import TopBar from '../DashBoard/TopBar'
import Grid from '../DashBoard/Grid'

const Dashboard = () => {
  return (
    <div className='bg-neutral-900 rounded-lg pb-4 shadow text-white h-[150vh]'>
      <TopBar />
      <Grid/>
    </div>
  )
}

export default Dashboard

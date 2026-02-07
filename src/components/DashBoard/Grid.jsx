import React from 'react'
import StatCards from '../DashBoard/StatCards'
import ActivityGraph from '../DashBoard/ActivityGraph'
import RecentTransaction from '../DashBoard/RecentTransaction'


const Grid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 '>
      <StatCards />   
      <ActivityGraph />
      <RecentTransaction />
      
      </div>
    
  )
}

export default Grid

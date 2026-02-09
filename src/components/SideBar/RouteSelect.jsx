import React from 'react'
import { menuItems } from '../../data/data'
import { NavLink } from 'react-router-dom'

const RouteSelect = () => {
  return (
    <div className='mt-10 p-2'>
        <div className='space-y-6'>
           {menuItems.map(({id, name, icon: Icon, path}) => (
              <NavLink key={id}
                to={path}
                className={({isActive})=>`flex items-center p-2 rounded-md transition-colors duration-500 ease-in-out
                 ${isActive ? 'bg-slate-800 text-white shadow-lg scale-105' : 'hover:bg-slate-800 text-slate-400'}`}
                >
                <Icon className='w-5 h-5 mr-3' />
                <span>{name}</span>

              </NavLink>
            ))}
        </div>
      
    </div>
  )
}

export default RouteSelect

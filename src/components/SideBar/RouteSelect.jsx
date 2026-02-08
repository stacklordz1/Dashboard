import React from 'react'
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  BarChart3,
  FileText,
  Settings,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, path: '/' },
  { name: 'Accounts', icon: Wallet, path: '/accounts' },
  { name: 'Transactions', icon: ArrowLeftRight, path: '/transactions' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  { name: 'Reports', icon: FileText, path: '/reports' },
  { name: 'Settings', icon: Settings, path: '/settings' },
]

const RouteSelect = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {menuItems.map(({ name, icon: Icon, path }, index) => (
        <NavLink
          to={path}
          key={index}
          className={({ isActive }) =>
            `group flex items-center gap-4 p-2 rounded transition-all duration-200
            ${isActive ? 'bg-gray-700 shadow-md text-white scale-105' : 'text-gray-400 hover:bg-gray-600'}`
          }
        >
          <div>
            <Icon size={20} />
          </div>
          <span className="overflow-hidden text-white group-hover:opacity-100 transition-opacity duration-300">
            {name}
          </span>
        </NavLink>
      ))}
    </div>
  )
}

export default RouteSelect

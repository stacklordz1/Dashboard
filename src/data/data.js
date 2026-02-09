import {HomeIcon, BarChartIcon, MessageSquareIcon, SettingsIcon, LogOutIcon}  from 'lucide-react'



export const menuItems = [{
    path: '/',
        id: 'Dashboard',
        name: 'Dashboard',
        icon: HomeIcon,
    },
    {
        path: '/analytics',
        id: 'Analytics',
        name: 'Analytics',
        icon: BarChartIcon,
    },
    {
        path: '/messages',
        id: 'Messages',
        name: 'Messages',
        icon: MessageSquareIcon,
    },
    {
        path: '/settings',
        id: 'Settings',
        name: 'Settings',
        icon: SettingsIcon,
    },
    {
        path: '/logout',
        id: 'Logout',
        name: 'Logout',
        icon: LogOutIcon,
    },
]
       
import React from 'react'
import Profile from '../../assets/profile.jpeg'
import { XIcon } from 'lucide-react'

const TopSection = () => {
    return (
        <div>
            {/* Top section */}
            <div className='flex items-center justify-between  border-slate-700 '>
                <div className='flex items-center'>
                    {/* Profile Image */}
                    <img src={Profile} alt="Profile" className='w-10 h-10 rounded-full' />
                    {/*User info  */}
                    <div className='ml-4'>
                        <h2 className='text-sm font-semibold'>Festus</h2>
                        <p className='text-xs text-slate-400'>Admin</p>
                    </div>
                </div>
                <button className='cursor-pointer'>
                    <XIcon className='w-6 h-6 ' />
                </button>
            </div>

        </div>
    )
}

export default TopSection

import React from 'react'
import Profile from '../../assets/profile.jpeg'
import { MdMenuOpen } from 'react-icons/md'


const AccountToggle = () => {


    return (
        <div className='border shadow-md border-gray-800 p-2 mb-10'>

            <div className='flex gap-4 items-center justify-around'>
                <img src={Profile} alt="Profile" className='w-14 h-14  rounded-full' />
            <div className=''>
                <p className='font-bold text-sm'>Festus</p>
                <p className='text-xs'>@stacklordz</p>
            </div>
        <MdMenuOpen size={30}/>

            </div>
        </div>
    )
}

export default AccountToggle
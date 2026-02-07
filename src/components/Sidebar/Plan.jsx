import React from 'react'

const Plan = () => {
    return (
        <div className='flex sticky top-[calc(100vh-48px-18px)]
     flex-col h-12  border-stone-300 px-2 justify-end text-sm'>

            <div className='flex items-center justify-between flex-1 flex-start  mb-2 '>
                <div>
                    <p className='font-bold'>Upgrade to Pro</p>
                    <p className='text-xs text-stone-400'>Get access to pro features</p>
                </div>
            </div>
                <button className='px-2 py-1.5 font-medium bg-gray-700 rounded hover:bg-gray-800 transition-colors mb-4'>
                    Change Plan
                </button>
        </div>
    )
} 

export default Plan

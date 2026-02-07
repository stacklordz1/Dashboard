import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <>
      <div className="bg-stone-800 rounded-lg px-2 py-1.5 mb-4 relative flex items-center text-sm">
       <FiSearch className='mr-2'/>
       <input type="text"
       placeholder='Search...'
       className="w-full bg-stone-800 text-white focus:outline-none "/>
      </div>
    </>
  )
}

export default Search

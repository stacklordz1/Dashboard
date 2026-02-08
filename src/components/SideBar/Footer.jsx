import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto p-2 text-gray-400">
      <div className="border-t border-gray-700 pt-2">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer

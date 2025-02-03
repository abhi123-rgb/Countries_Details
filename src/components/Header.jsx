import React from 'react'

const Header = () => {
  return (
    <nav className=' py-6  text-sm  shadow-md bg-white'>
      <div className="flex justify-between w-[90%] m-auto">
        <h2 className='font-bold'>Where in the world?</h2>
        <button className='flex items-center'><ion-icon name="moon"></ion-icon>Dark Mode</button>
      </div>
    </nav>
  )
}

export default Header
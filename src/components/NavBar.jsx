import React from 'react'
// import './Navbar.css'
export const NavBar = () => {
  return (
    <div className='flex justify-between'>
        <div className="flex p-10 justify-between">
            {/* left */}
            <div className='logo'>
                {/* <img src="" alt="logo" /> */}
                <h1 className='text-2xl mr-10 ml-10'>MAC</h1>
            </div>
            <ul className='flex justify-center px-10 gap-15'>
                <li>Service</li>
                <li>Agency</li>
                <li>Case Study</li>
                <li>Rsourece</li>
                <li>Contact</li>
            </ul>

            {/* right */}
            <div className='ml-130'>
                <button className='px-5 py-1 rounded-3xl border'>Get Started</button>
            </div>
            
        </div>
    </div>
  )
}

import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='w-full h-20 flex items-center justify-between px-28 pt-10 font-md text-2xl '>
      <h1>MyFashionStore</h1>
      <div className='flex gap-4 font-light text-2xl'>
        <h2>Home</h2>
        <h2>New Arrivals</h2>
        <h2>Men</h2>
        <h2>Women</h2>
        <h2>About</h2>
        <h2>Contact Us</h2>
      </div>
      <div className='flex gap-4 font-light text-2xl'>
        <h2>My Profile</h2>
        <h2>Cart</h2>
      </div>
    </div>
    </>
  )
}

export default Navbar

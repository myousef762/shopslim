import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  let [selected, setSelected] = useState('shop');
  return (
    <nav className='flex justify-around py-5'>
      <div className='flex space-x-3 cursor-pointer'>
        <img src={require("../../Assets/logo.png")} alt='' />
        <h1 className='text-4xl font-medium pt-3'>SHOPPER</h1>
      </div>
      <div className='flex items-center text-xl text-slate-500 space-x-12 font-medium'>
        <Link to='/' onClick={() => setSelected("shop")}>Shop{selected === 'shop' && <hr />}</Link>
        <Link to='/men' onClick={() => setSelected("men")}>Men{selected === 'men' && <hr />}</Link>
        <Link to='/women' onClick={() => setSelected("women")}>Women{selected === 'women' && <hr />}</Link>
        <Link to='/kids' onClick={() => setSelected("kids")}>Kids{selected === 'kids' && <hr />}</Link>
      </div>
      <div className='flex space-x-7 items-center'>
        <button className='border-2 border-zinc-600 rounded-full px-10 h-11 hover:bg-zinc-600 hover:text-white'>Login</button>
        <img src={require("../../Assets/cart_icon.png")} alt='' className='cursor-pointer'/>
      </div>
    </nav>
  )
}

export default Navbar

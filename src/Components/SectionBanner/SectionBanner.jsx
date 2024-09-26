import React from 'react'
import '../../App.css'

const SectionBanner = ({ img }) => {
    return (
        <>
          <div className='text-orange-500 flex justify-around w-11/12 font-medium mx-auto my-8 bg-gradient-to-r from-purple-100 to-gray-400 hover:bg-gradient-to-l'>
            <div className='flex justify-evenly flex-col'>
                <h1 className='text-6xl flex flex-col leading-normal'>FLAT 50% OFF</h1>
                <p className='text-3xl content'>
                    12 <span>Hours</span> 20 <span>Mins</span>
                </p>
                <button className='text-2xl text-white bg-red-500 rounded-full w-2/3 h-16   '>Explore Now</button>
            </div>
            <div>
                <img src={img} alt='' className='h-96'/>
            </div>
          </div>
        </>
      )
}

export default SectionBanner

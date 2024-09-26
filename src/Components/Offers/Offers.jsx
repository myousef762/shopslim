import React from 'react'

const Offers = () => {
  return (
    <>
      <div className='flex justify-around w-11/12 font-medium mx-auto my-8 bg-gradient-to-t from-cyan-100 to-purple-100 hover:bg-gradient-to-b'>
        <div className='flex justify-evenly flex-col'>
            <h1 className='text-6xl flex flex-col leading-normal'><span>Exclusive</span> Offers For You</h1>
            <p className='text-3xl'>
                ONLY ON BEST SELLERS' PRODUCTS
            </p>
            <button className='text-2xl text-white bg-red-500 rounded-full w-2/5 h-16   '>Check Now</button>
        </div>
        <div>
            <img src={require('../../Assets/exclusive_image.png')} alt='' />
        </div>
      </div>
    </>
  )
}

export default Offers

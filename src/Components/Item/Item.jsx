import React from 'react'

const Item = ({ img, name, old_price, new_price }) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <img src={img} alt='' />
      <h1 className='text-lg'>{name}</h1>
      <div className='flex'>
        <span className='block w-10 text-center rounded bg-red-500 text-white hover:bg-red-600'>{new_price}</span>
        <span className='block line-through text-gray-400 pl-4'> {old_price}</span>
      </div>
    </div>
  )
}

export default Item

import React from 'react'
import new_collections from '../../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  const displayItems = new_collections.map((i, key) => <Item 
  key={key}
  img={i.image}
  name={i.name}
  old_price={i.old_price}
  new_price={i.new_price} 
  />)
  return (
    <>
      <div className='grid mx-auto my-10 grid-cols-4 gap-5 w-11/12'>
        {displayItems}
      </div>
    </>
  )
}

export default NewCollection

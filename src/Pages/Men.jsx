import React from 'react'
import Collection from '../Components/Collection/Collection'
import SectionBanner from '../Components/SectionBanner/SectionBanner'

const Men = () => {
  return (
    <>
        <SectionBanner
        img={require("../Assets/men_banner.png")}
        />
        <Collection 
        category='men'
        />
    </>
  )
}

export default Men
